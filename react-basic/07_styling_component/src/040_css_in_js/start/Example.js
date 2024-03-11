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
  return (
    <>
      <StyledBtn isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledBtn>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
