import React, { Fragment } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import LogoImg from "../../assets/logo.png"
import { Container, Copy, Item, ItemMobile } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <nav>
            <li><span><FaFacebook size={32} /></span></li>
            <li><span><FaInstagram size={32} /></span></li>
            <li><span><FaWhatsapp size={32} /></span></li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>

        {/* Item exclusivo para mobile */}
        <ItemMobile>
          <h3>Our Services</h3>
          <ul>
            <li>Comprar</li>
            <li>Alugar</li>
            <li>Vender</li>
          </ul>
        </ItemMobile>
      </Container>

      <Copy>
        <p>© Copyright 2022 - Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li><span>Termos de Uso</span></li>
          <li><span>Política de Privacidade</span></li>
          <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
    </Fragment>
  )
}

export default Footer;
