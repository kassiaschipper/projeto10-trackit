import { useContext, useState } from "react";
import styled from "styled-components";
import { postHabitDone } from "../../services/trackIt";
import { postHabitUndone } from "../../services/trackIt";
import UserContext from "../../context/UserContext";

export default function TodayHabit({ todayHabit, handleTodayHabits }) {
  const [check, setCheck] = useState(todayHabit.done);

  function checkHabit(habit) {
    setCheck(!check);

    if (habit.done) {
      postHabitUndone(habit.id)
        .then((response) => {
          handleTodayHabits();
        })
        .catch((err) => {
          alert("Não foi possível registrar atividade");
        });
    } else {
      postHabitDone(habit.id)
        .then((response) => {
          handleTodayHabits();
        })
        .catch((err) => {
          alert("Não foi possível registrar atividade");
        });
    }
  }

  let sequence = todayHabit.currentSequence;
  let record = todayHabit.highestSequence;

  return (
    <Wrapper>
      <Box check={check}>
        <div>
          <h3>{todayHabit.name} </h3>
          <p>
            Sequência atual: <span>{sequence} dias</span>
          </p>
          <Record check={check} sameValue={sequence === record}>
            <p>
              Seu recorde: <span>{record} dias </span>
            </p>
          </Record>
        </div>
        <p onClick={() => checkHabit(todayHabit)}>
          {" "}
          <ion-icon name="checkbox"></ion-icon>
        </p>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 380px;
  height: 100px;
  left: 18px;
  bottom: 250px;
  justify-content: space-between;
  padding-right: 5%;
  padding-top: 4%;

  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 5%;

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  span {
    color: ${(props) => (props.check ? "#8FC549" : "#666666")};
  }

  p {
    position: relative;
    top: 5px;
    left: 0;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }

  ion-icon {
    width: 69px;
    height: 69px;
    background-color: white;
    border: black;
    border-radius: 5px;
    color: ${(props) => (props.check ? "#8FC549" : "#e7e7e7")};
    position: relative;
    bottom: 10%;
    left: 4%;
  }
`;

const Record = styled.span`
  span {
    color: ${(props) =>
      props.sameValue && props.check ? "#8FC549" : "#666666"};
  }

  p {
    position: relative;
    top: 5px;
    left: 0;
  }
`;
