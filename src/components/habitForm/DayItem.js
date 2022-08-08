import styled from "styled-components";
import { useState } from "react";

export default function DayItem({children, disabled, selected }) {

    const [clicked, setClicked] = useState(false);
    return <Wrapper onClick={disabled ? function() {}: () => setClicked(!clicked)} clicked={selected || clicked}>{children}</Wrapper>
}
const Wrapper = styled.li`
  background-color: ${(props) => (props.clicked ? "#dbdbdb" : "#ffffff")};
  color: ${(props) => (props.clicked ? "#ffffff" : "#dbdbdb")};
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
  
  
`;
