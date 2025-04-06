import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Logo, Menu, HeaderContent } from "./styles";

const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const userLogged = localStorage.getItem("Yt");

  return (
    <Container>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt="Logo" />
          </Link>
        </Logo>

        <Menu>
          <ul>
            {!userLogged ? (
              <li>
                <Link to="/login">
                  <span>Cadastro/Login</span>
                </Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout}>
                  <span>Sair</span>
                </button>
              </li>
            )}
          </ul>
        </Menu>
      </HeaderContent>
    </Container>
  );
};

export default Header;
