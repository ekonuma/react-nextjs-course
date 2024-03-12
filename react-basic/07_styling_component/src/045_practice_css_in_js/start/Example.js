import styled from "styled-components";
import { useState } from "react";

const Example = () => {
  const FirstButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: none;
    background: pink;
  `;

  const SecondButton = styled(FirstButton)`
    background: red;
    color: white;
  `;
  const ThirdButton = styled(SecondButton)`
    background: ${({ isDark }) => (isDark ? "black" : "green")};
  `;
  return (
    <>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton isDark={false}>ボタン3</ThirdButton>
      <ThirdButton isDark={true}>ボタン3</ThirdButton>
    </>
  );
};

export default Example;
