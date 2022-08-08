import dayjs from "dayjs";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import TodayHabit from "./TodayHabit";
import { getTodaytHabits } from "../../services/trackIt";
import Message from "./Message";

export default function Today() {
  const [todayHabits, setTodayHabits] = useState([]);
  const { percentage, setPercentage } = useContext(UserContext);

  useEffect(() => {
    handleTodayHabits();
  }, []);

  function handleTodayHabits() {
    getTodaytHabits()
      .then((response) => {
        setTodayHabits(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        alert("Erro ao listar hábitos");
      });
  }

  const dayNames = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return (
    <Wrapper>
      <Title>
        <h1>
          {dayNames[dayjs().day()]}, {dayjs().format("DD/MM")}
        </h1>
      </Title>
      <Message todayHabits={todayHabits} />
      {todayHabits.map((value) => (
        <TodayHabit todayHabit={value} handleTodayHabits={handleTodayHabits} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  position: fixed;
  top: 70px;
`;
const Title = styled.div`
  position: relative;
  bottom: 300px;
  left: 5%;
  width: 100%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;

