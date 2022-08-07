import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Habits from "../habits/Habits";

export default function Footer({}) {
  const percentage = 66;
//   const {percentage} = useContext(userDataContext)
  return (
    <ContainerWrapper>
      <Link to="/habitos" >
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
         
        <CircularWrapper>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background
            backgroundPadding={7}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#ffffff",
              textSize:"17.976px",
              pathColor: "#ffffff",
              trailColor: "none",
            })}
          />
        </CircularWrapper>
            
      </Link>
      <Link to="/historico">
        <span>Histórico</span>
      </Link>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.body`
  background-color: white;
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: "white";
    padding-bottom: 0;
    justify-content: space-around;
    align-items: center;
    
    span {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;
      text-align: center;
    
      color: #52b6ff;
    }
  }
`;

const CircularWrapper = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 10px;
  right: calc(50% - (91px / 2));
`;
