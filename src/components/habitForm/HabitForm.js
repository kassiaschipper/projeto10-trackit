import { CanceledError } from "axios";
import { useState } from "react";
import styled from "styled-components";
import { postCreatHabit } from "../../services/trackIt";

export default function HabitForm() {
  const [name, setName] = useState("");
 

  return (
    <FormWrapped>
      <div>
        <input
          name="habit"
          placeholder="nome do hábito"
          type="text"
          value={name}
          disabled={false}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <>
          <ul>
            <li>D</li>
            <li>S</li>
            <li>T</li>
            <li>Q</li>
            <li>Q</li>
            <li>S</li>
            <li>S</li>
          </ul>
        </>
        <Button>
          <p>Cancelar</p>
          <button>Salvar</button>
        </Button>
      </div>
    </FormWrapped>
  );
}

const FormWrapped = styled.body`
 
  div {
    margin-top: 20px;
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    margin: 18px auto 0 auto; 
  }

  input {
    position: relative;
    top: 18px;
    left: 18px;
    width: 303px;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::placeholder {
    padding-left: 10px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }

  ul {
    display: flex;
    position: relative;
    top: 30px;
    left: 18px;
    width: 240px;
    justify-content: space-between;
  }
  li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
`;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

const Button = styled.span`
  width: 100%;
  padding-right: 05%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
 
  button {
    position: relative;
    width: 84px;
    height: 35px;
    left: 0;
    top: 0;
    border: none;
    background: #52b6ff;
    border-radius: 4.63636px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;

    
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    
    text-align: center;

    color: #52b6ff;
    padding-left: 45%;
  }
`;
