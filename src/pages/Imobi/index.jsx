import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import TopBanner from "../../components/TopBanner";
import Api, { urlApi } from "../../services/Api";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescriptin,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb
} from "./styles";
import { toast } from "react-toastify";

const Imobi = () => {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState({});

  const [client_name, setClientName] = useState('');
  const [client_email, setClientEmail] = useState('');
  const [client_mensagem, setClientMensagem] = useState('');

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((response) => {
        setDataImobi(response.data);
      })
      .catch(() => {
        console.error("Erro: Erro ao listar imóvel");
      });
  }, [slug]);

  const {
    tipo = "",
    cidade = "",
    endereco = "",
    descricao = "",
    thumb = "",
    name = "",
    email = "",
    telefone = "",
    userId = ""
  } = dataimobi;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!client_name || !client_email || !client_mensagem) {
      toast.error("Preencha todos os campos antes de enviar.");
      return;
    }

    const dataMessage = {
      client_name,
      client_email,
      client_mensagem,
      userId
    };

    Api.post('/createmessage', dataMessage)
      .then((response) => {
        toast.success(response.data.message);
        setClientName('');
        setClientEmail('');
        setClientMensagem('');
      })
      .catch(() => {
        toast.error('Erro: Erro no sistema');
      });
  };

  return (
    <Fragment>
      <TopBanner
        tipo={tipo}
        descricao={descricao}
        thumb={`${urlApi}/uploads/${thumb}`}
      />
      <Container className="flex flex-col sm:flex-row px-4 sm:px-[150px] gap-6">
        <Left className="w-full sm:w-2/3">
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt={tipo} className="w-full h-auto" />
          </Thumb>
          <Description>
            <h2 className="text-2xl font-semibold">{tipo}</h2>
            <h5 className="mt-2">Cidade: {cidade}</h5>
            <h5>Endereço: {endereco}</h5>
            <p className="mt-4">{descricao}</p>
          </Description>
        </Left>

        <Right className="w-full sm:w-1/3 flex flex-col gap-4">
          <Profile className="flex gap-4 items-center sm:items-start">
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="Foto do usuário"
                className="rounded-full w-[80px] h-[80px] object-cover"
              />
            </ProfileImg>
            <ProfileDescriptin className="text-center sm:text-left">
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-gray-600">Descrição do usuário</p>
            </ProfileDescriptin>
          </Profile>

          <ProfileContact className="text-center sm:text-left">
            <h3 className="font-bold mb-2">Informações para contato:</h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>

          <ProfileFormContact>
            <h3 className="font-bold mb-2">Contate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
              <Input
                type="text"
                placeholder="Nome:"
                name="client_name"
                value={client_name}
                onChange={(e) => setClientName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="E-mail:"
                name="client_email"
                value={client_email}
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <TextArea
                placeholder="Mensagem:"
                name="client_mensagem"
                value={client_mensagem}
                onChange={(e) => setClientMensagem(e.target.value)}
              />
              <Button type="submit">Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi;
