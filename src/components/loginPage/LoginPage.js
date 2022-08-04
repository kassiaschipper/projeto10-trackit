import styled from "styled-components";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { postLogin } from "../../services/trackIt";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    
    postLogin(body).then((response) => {
      console.log(response.data);
      navigate("/habitos")
    });
    
    postLogin(body).catch((err) => 
    {
        console.log(err.response);
        alert("E-mail ou senha incorretos. Tente novamente.")
    })
 }

  return (
    <Content>
      <div>
        {" "}

        <img src={logo} />{" "}
      </div>
      <div>
        <form onSubmit={handleForm}>
          <input
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <input
            name="password"
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <button type="submit">Entrar</button>
          <span onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</span>
        </form>
      </div>
    </Content>
  );
}

const Content = styled.div`
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }

    form {
      display: flex;
      flex-direction: column;

      width: 303px;
      height: 100%;

      position: fixed;
      top: 35%;
      left: 14%;
    }
    input {
      width: 303px;
      height: 45px;
      margin-bottom: 6px;
      color: blue;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      padding-left: 10px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
    }
    input::placeholder {
      color: #dbdbdb;
    }

    img {
      position: fixed;
      top: 10%;
      left: 25%;
      margin-bottom: 35px;
    }
    button {
      width: 303px;
      height: 45px;
      margin-bottom: 25px;

      background: #52b6ff;
      border-radius: 4.63636px;
      border: none;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 20.976px;
      line-height: 26px;
      text-align: center;

      color: #ffffff;
    }
    span {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 13.976px;
      line-height: 17px;
      text-align: center;
      text-decoration-line: underline;

      color: #52b6ff;
    }
  }
`;