import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage } from "../../context/utils";

const Perfil = () => {
  const [thumb, setThumb] = useState('');
  const [tipo, setTipo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState([]);

  const usuario = getLocalStorage();
  const { id } = usuario || {};

  const data = {
    id,
    thumb,
    tipo,
    endereco,
    cidade,
    uf,
    valor,
    descricao,
    name,
    email,
    telefone,
  };

  useEffect(() => {
    if (id) {
      Api.get(`/listmessage/${id}`)
        .then((response) => {
          setMessage(response.data.messagem);
        })
        .catch(() => {
          console.log("Erro: Erro ao listar mensagens");
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      'headers': {
        'content-type': 'multipart/form-data',
      },
    };

    Api.post('/createimobi', data, headers)
      .then((response) => {
        toast(response.data.message);
      })
      .catch(() => {
        console.log("Erro: Erro ao cadastrar imóvel");
      });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Minhas mensagens</h2>
        {message.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4 rounded-xl shadow">
            <span className="block font-medium">Nome: {item.client_name}</span>
            <span className="block text-sm text-gray-700">Email: {item.client_email}</span>
            <p className="mt-2 text-gray-800">{item.client_mensagem}</p>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Cadastrar imóveis</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4">
          <Input type="file" name="thumb" onChange={(e) => setThumb(e.target.files[0])} />
          <Input type="text" name="tipo" placeholder="Informe o tipo do imóvel:" onChange={(e) => setTipo(e.target.value)} />
          <Input type="text" name="endereco" placeholder="Informe o endereço do imóvel:" onChange={(e) => setEndereco(e.target.value)} />
          <Input type="text" name="cidade" placeholder="Informe a cidade do imóvel:" onChange={(e) => setCidade(e.target.value)} />
          <Input type="text" name="uf" placeholder="UF:" onChange={(e) => setUf(e.target.value)} />
          <Input type="text" name="descricao" placeholder="Descrição do imóvel:" onChange={(e) => setDescricao(e.target.value)} />
          <Input type="text" name="name" placeholder="Informe seu nome:" onChange={(e) => setName(e.target.value)} />
          <Input type="text" name="email" placeholder="Informe seu e-mail:" onChange={(e) => setEmail(e.target.value)} />
          <Input type="text" name="valor" placeholder="Informe o valor do imóvel Ex: 500,00:" onChange={(e) => setValor(e.target.value)} />
          <Input type="text" name="telefone" placeholder="Informe o telefone de contato Ex: (99) 9 9999-9999:" onChange={(e) => setTelefone(e.target.value)} />
          <Button type="submit">Cadastrar imóvel</Button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
