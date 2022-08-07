import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegistration } from "../../services/trackIt";
import { ThreeDots } from "react-loader-spinner";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    const body = {
      email,
      password,
      name,
      image,
    };
    

    postRegistration(body).then((response) => {
      
      setLoading(true);
      navigate("/");
    }).catch((err) => {
      setLoading(false);
      alert("Erro ao enviar os dados!");
    });
  }
  return (
    <Content>
      <div>
        {" "}
        <img src={logo} />{" "}
        <form onSubmit={handleForm}>
          <input
            name="email"
            placeholder="email"
            type="email"
            value={email}
            disabled={loading ? true : false}
            onChange={(e) => {
              setEmail(e.target.value);
           
            }}
            required
          ></input>

          <input
            name="password"
            placeholder="senha"
            type="password"
            value={password}
            disabled={loading ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <input
            name="name"
            placeholder="nome"
            type="text"
            value={name}
            disabled={loading ? true : false}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>

          <input
            name="image"
            placeholder="foto"
            type="url"
            value={image}
            disabled={loading ? true : false}
            onChange={(e) => setImage(e.target.value)}
            required
          ></input>

          <button type="submit">
          {loading ? (
                            <ThreeDots color="#FFFFFF" height={13} aling="center" />
                        ) : (
                            'Entrar'
                        )}
          </button>
          <span onClick={() => navigate("/")}>
            Já tem uma conta? Faça login!
          </span>
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

    img {
      position: fixed;
      top: 10%;
      left: 25%;
      margin-bottom: 35px;
    }
    form {
      position: fixed;
      top: 35%;
      left: 14%;

      display: flex;
      flex-direction: column;
      height: 100%;
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
