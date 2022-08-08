import dayjs from "dayjs";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function Today() {
  // const {newHabits, setNewHabits} = useContext(UserContext);
  const { habits, setHabits } = useContext(UserContext);

  const habitsLength = habits.length;
  console.log(habitsLength);

  const dayNames = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  function RenderHabits() {
    return <p>Nenhum hábito concluído ainda</p>;
  }

  return (
    <Wrapper>
      <Title>
        <h1>
          {dayNames[dayjs().day()]}, {dayjs().format("DD/MM")}
        </h1>
      </Title>
      {habitsLength === 0 ? <p>Nenhum hábito concluído ainda</p> : "teste"}
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

  p {
    position: relative;
    bottom: 280px;
    left: 5%;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
const Title = styled.div`
  position: relative;
  bottom: 280px;
  left: 5%;
  width: 100%;
  background-color: aqua;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;
