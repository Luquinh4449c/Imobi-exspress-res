import React, { Fragment, useState, useEffect } from "react";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import { Header, Wrapper } from "./styles";
import Api from "../../services/Api";

const Home = () => {
  const [imobi, setImobi] = useState([]);

  useEffect(() => {
    Api.get('/listimobi')
      .then((response) => {
        console.log("Resposta da API:", response.data);
        setImobi(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Erro: Erro no sistema", error);
      });
  }, []);

  return (
    <Fragment>
      <Banner />
      <Header className="px-4 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Find the property of your dreams!
        </h2>
      </Header>

      <Wrapper className="px-4 sm:px-[150px] grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-3">
        {Array.isArray(imobi) && imobi.length > 0 ? (
          imobi.map((item) => (
            <Card
              key={item.id}
              thumb={item.thumb}
              tipo={item.tipo}
              endereco={item.endereco}
              valor={item.valor}
              slug={item.slug}
            />
          ))
        ) : (
          <p className="text-center col-span-full py-4">
            Nenhum imóvel encontrado.
          </p>
        )}
      </Wrapper>
    </Fragment>
  );
};

export default Home;
