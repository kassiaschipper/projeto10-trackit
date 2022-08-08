import { useState, useContext } from "react";
import styled from "styled-components";
import { postCreateHabit } from "../../services/trackIt";
import DayItem from "./DayItem";

export default function HabitForm({ setShowHabitBox, handleGetHabits }) {
  const [name, setName] = useState("");  
  const [days, setDays] = useState([]);


  function handleForm(event) {
    event.preventDefault();
    if (days.length === 0) {
      alert("Selecione ao menos um dia!");
      return;
    }
    const body = {
      name,
      days,
    };


    postCreateHabit(body)
      .then((response) => {
   
        setShowHabitBox(false);
        handleGetHabits();
      
      })
      .catch((err) => {
        alert("Erro ao incluir hábito");
      });
  }

  function handleDays(day) {
    //função para incluir dias selecionados na array days
    const index = days.indexOf(day);

    if (index === -1) {
      days.push(day);
    } else {
      days.splice(index, 1);
    }
  }

  return (
    <FormWrapped>
      <div>
        <form onSubmit={handleForm}>
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
              <span onClick={() => handleDays(0)}>
                <DayItem disabled={false}>D</DayItem>
              </span>
              <span onClick={() => handleDays(1)}>
                <DayItem disabled={false}>S</DayItem>
              </span>
              <span onClick={() => handleDays(2)}>
                <DayItem disabled={false}>T</DayItem>
              </span>
              <span onClick={() => handleDays(3)}>
                <DayItem disabled={false}>Q</DayItem>
              </span>
              <span onClick={() => handleDays(4)}>
                <DayItem disabled={false}>Q</DayItem>
              </span>
              <span onClick={() => handleDays(5)}>
                <DayItem disabled={false}>S</DayItem>
              </span>
              <span onClick={() => handleDays(6)}>
                <DayItem disabled={false}>S</DayItem>
              </span>
            </ul>
          </>
          <Button>
            <p onClick={() => setShowHabitBox(false)}>Cancelar</p>
            <button type="submit">Salvar</button>
          </Button>
        </form>
      </div>
    </FormWrapped>
  );
}

const FormWrapped = styled.body`
  div {
    position: relative;
    top: 60px;
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

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-left: 15px;

    color: #666666;
  }

  input::placeholder {
    font-family: "Lexend Deca";

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
