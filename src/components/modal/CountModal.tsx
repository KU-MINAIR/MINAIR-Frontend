import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

interface CountProps {
  setCount: Function;
}

export default function CountModal({ setCount }: CountProps): ReactElement {
  const [day, setDay] = useState(0);

  useEffect(() => {
    setCount(day);
  }, [day]);

  return (
    <ModalContainer>
      <StyledButton
        onClick={() => {
          day > 0 ? setDay(day - 1) : setDay(0);
        }}
      >
        -
      </StyledButton>
      {day}
      <StyledButton
        onClick={() => {
          setDay(day + 1);
        }}
      >
        +
      </StyledButton>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 18px;
`;

const StyledButton = styled.button`
  border-radius: 100%;
  border: 1px solid #b1b1b1;
  width: 30px;
  height: 30px;
  margin: 20px;
  font-size: 20px;
  color: #222222;
`;
