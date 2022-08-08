import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { useContext, useEffect  } from "react";

export default function Message({ todayHabits }) {
  const { percentage, setPercentage } = useContext(UserContext);

  useEffect(() => {
    calculatePercentage();
  }, );


  const todayHabitsLength = todayHabits.length;
  function calculatePercentage() {
    console.log('twstw');
    let done = todayHabits.filter((value) => value.done).length;
 
    setPercentage((done / todayHabitsLength) * 100);
  }

  if (percentage === 0) {
    
    return (
      <P>
        <p>Nenhum hábito concluído ainda</p>
      </P>
    );
  } else {
    
    return (
      <Percentage>
        <p>{percentage}% dos hábitos concluídos</p>
      </Percentage>
    );
  }
}

const Percentage = styled.div`
  p {
    position: fixed;
    bottom: 80%;
    left: 5%;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #8fc549;
  }
`;

const P = styled.div`
  p {
    position: fixed;
    bottom: 80%;
    left: 5%;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
