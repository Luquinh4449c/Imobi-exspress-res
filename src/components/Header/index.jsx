import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login"; // Force redirect after logout
  };

  const userLogged = localStorage.getItem("Yt");

  return (
    <Container>
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
              <button onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}>
                <span>Sair</span>
              </button>
            </li>
          )}
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
