import styled from "styled-components";

export default function Header({image}){
   
   return (
        <HeaderWrapper>
            <p>TrackIt</p>
            <img src={image} />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
     @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }
 
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
      
    position: fixed;
    top: 0;
    left: 0;
    
    p {
        font-family: 'Playball';
        color: #FFFFFF;
        font-size: 39px;
    }
    img {
        clip-path: circle();
        width: 61px;
        margin-right: 30px;
    }
}
`;