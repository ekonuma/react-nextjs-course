import { useState } from "react";
import styled from "styled-components";
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);
  const StyledBtn = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${({ isSelected }) => (isSelected ? "pink" : "")};
  `;
  const OrangeBtn = styled(StyledBtn)`
    background-color: orange;
    :hover {
      color: red;
    }
    span {
      font-size: 2em;
    }
  `;
  return (
    <>
      <StyledBtn isSelected={isSelected} onClick={clickHandler}>
        <span>ボタン</span>
      </StyledBtn>
      <OrangeBtn isSelected={isSelected} onClick={clickHandler}>
        <span>ボタン</span>
      </OrangeBtn>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
