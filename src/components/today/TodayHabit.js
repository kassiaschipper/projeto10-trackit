import { useState } from "react";
import styled from "styled-components";
import { postHabitDone } from "../../services/trackIt";
import { postHabitUndone } from "../../services/trackIt";

export default function TodayHabit({ todayHabit, handleTodayHabits }) {
  const [check, setCheck] = useState(todayHabit.done);
  
  function checkHabit(habit) {
    setCheck(!check);

    if (habit.done) {
      postHabitUndone(habit.id)
        .then((response) => {
          handleTodayHabits();
          
          console.log(response.data);
         
        })
        .catch((err) => {
          alert("Não foi possível registrar atividade");
        });
    } else {
      postHabitDone(habit.id)
        .then((response) => {
          handleTodayHabits();      
          console.log(response.data);
      
        })
        .catch((err) => {
          alert("Não foi possível registrar atividade");
        });
    }
  }

  return (
    <Wrapper>
      <Box check={check}>
        <div>
          <span>{todayHabit.name} </span>
          <p>Sequência atual: {todayHabit.currentSequence} dias</p>
          <p>Seu recorde: {todayHabit.highestSequence} dias</p>
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
  background-color: yellow;
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

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }

  p {
    position: relative;
    top: 5px;
    left: 0;
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
