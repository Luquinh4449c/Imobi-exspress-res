import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import {
  Container,
  Description,
  Img,
  Itens
} from "./styles";
import { urlApi } from "../../services/Api";

const Card = ({ thumb, tipo, endereco, valor, slug }) => {
  return (
    <Container className="w-full max-w-[420px] mx-auto sm:mx-0">
      <Img className="w-full sm:w-auto">
        <img
          src={`${urlApi}/uploads/${thumb}`}
          alt="Imovél"
          className="w-full h-auto object-cover"
        />
      </Img>
      <Description className="px-4 sm:px-0">
        <h4 className="text-xl sm:text-lg">{tipo}</h4>
        <Itens className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <span className="flex items-center gap-1 text-sm">
            <FaMapMarkerAlt />
            {endereco}
          </span>
          <span className="text-sm">R$ {valor} / mês</span>
        </Itens>
        <Link
          to={`/imovel/${slug}`}
          className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:underline"
        >
          Detalhes <FaArrowRight />
        </Link>
      </Description>
    </Container>
  );
};

export default Card;
