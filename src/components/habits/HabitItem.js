import styled from "styled-components";
import DayItem from "../habitForm/DayItem";

export default function HabitItem({ item, habitId, onDelete }) {
  function habitDelete(habitId) {
    const confirmDelete = window.confirm(
      "Tem certeza de que gostaria de excluir esse hábito?"
    );
    if (confirmDelete) {
      onDelete(habitId);
    }
  }



  return (
    <HabitWrapper>
      <>
        <span>
          {item.name}{" "}
          <p onClick={() => habitDelete(habitId)}>
            <ion-icon name="trash-outline"></ion-icon>
          </p>
        </span>
        <ul>
          <DayItem selected={item.days.includes(0)} disabled={true}>
            D
          </DayItem>

          <DayItem selected={item.days.includes(1)} disabled={true}>
            S
          </DayItem>
          <DayItem selected={item.days.includes(2)} disabled={true}>
            T
          </DayItem>
          <DayItem selected={item.days.includes(3)} disabled={true}>
            Q
          </DayItem>
          <DayItem selected={item.days.includes(4)} disabled={true}>
            Q
          </DayItem>
          <DayItem selected={item.days.includes(5)} disabled={true}>
            S
          </DayItem>
          <DayItem selected={item.days.includes(6)} disabled={true}>
            S
          </DayItem>
        </ul>
       
      </>
    </HabitWrapper>
  );
}

const HabitWrapper = styled.div`
  position: relative;
  top: 70px;
  left: 18px;
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  color: #666666;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 240px;
    position: relative;
    top: 15px;
    left: 0;
  }

  /* li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  } */

  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 10px;
    padding-top: 10px;
  }
`;
