import styled from "styled-components";

export default function Habits() {
  return (
    <ContainerWrapper>
      <SubTitleWrapper>
        <div>Meus hábitos</div>
        <button>+</button>
      </SubTitleWrapper>
      <TextWrapper>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </TextWrapper>
    </ContainerWrapper>
  );
}
// onClick={() => setNewHabit(true)}

const ContainerWrapper = styled.body`
  
   @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }
    position: fixed;
    top:74px;
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
   
  
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
    position: fixed;
    left: 0;
    top: 70px;
    margin-left: 16px;
    margin-top: 28px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    background-color: #E5E5E5;

    color: #126ba5;

    button {
      margin-right: 28px;
      width: 40px;
      height: 35px;
      left: 317px;
      top: 92px;

      background: #52b6ff;
      border-radius: 4.63636px;
      border: none;
      color: white;
    }
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 614px) {
    * {
      box-sizing: border-box;
    }
    position: fixed;
    width: 338px;
    height: 74px;
    left: 17px;
    top: 155px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;
