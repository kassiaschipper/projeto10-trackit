import styled from "styled-components";
export default function History() {
  return (
    <>
      <ContainerWrapper>
        <SubTitleWrapper>
          <div>Histórico</div>
        </SubTitleWrapper>
        <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
      </ContainerWrapper>
    </>
  );
}

const ContainerWrapper = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    position: fixed;
    top:70px;

    span {
      position: relative;
      bottom: 240px;
      left: 5%;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;
      width: 300px;

      color: #666666;
    }
  }
`;
const SubTitleWrapper = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }

    display: flex;
    align-items: center;
    width: 100%;

    height: 70px;
    position: fixed;
    left: 5%;
    top: 44px;
    z-index: 1;
    margin-top: 28px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    background-color: #e5e5e5;

    color: #126ba5;
  }
`;
