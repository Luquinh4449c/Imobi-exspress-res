import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";
import { AppAuth } from "../../context/AppAuth";

const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.authenticate(email, password);
  };

  return (
    <Container className="flex flex-col px-4 text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Acesse sua conta</h2>
      <p className="text-base mb-4">Entre com seu e-mail e senha!</p>
      <ContainerForm className="w-full sm:w-[370px] bg-white p-6 rounded-lg shadow-md">
        <Form onSubmit={handleLogin} autoComplete="off" className="space-y-3">
          <Label className="text-left">E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label className="text-left">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
        <p className="text-sm mt-4">
          Ainda não possui uma conta? <Link to="/cadastro" className="text-blue-600 underline">Cadastre-se</Link>
        </p>
      </ContainerForm>
    </Container>
  );
};

export default Login;
