import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HabitForm from "../habitForm/HabitForm";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [showHabitBox, setShowHabitBox] = useState(false);

 

  return habits.length === 0 ? (
    <ContainerWrapper>
      <SubTitleWrapper>
        <div>Meus hábitos</div>
        <button onClick={() => setShowHabitBox(true)}>+</button>
      </SubTitleWrapper>
      {showHabitBox ? <HabitForm setShowHabitBox={setShowHabitBox}/> : ''}
      
      <TextWrapper>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </TextWrapper>
    </ContainerWrapper>
  ) : (
    <>
      <div>teste</div>
    </>
  );
}


const ContainerWrapper = styled.body`
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }
    position: fixed;
    top: 74px;
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
  }
`;
const SubTitleWrapper = styled.div`
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    margin-left: 16px;
    margin-top: 28px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    background-color: #e5e5e5;

    color: #126ba5;

    button {
      margin-right: 38px;
      width: 40px;
      height: 35px;
      left: 317px;
      top: 92px;

      background: #52b6ff;
      border-radius: 4.63636px;
      border: none;
      color: white;
      font-weight: 400;
      font-size: 27px;
    }
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }
    position: relative;
    width: 338px;
    height: 74px;
    left: 7%;
    top: 0;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    margin-top: 28px;
    color: #666666;
  }
`;
