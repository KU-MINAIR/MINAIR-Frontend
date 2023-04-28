import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

interface CountProps {
  setCount: Function;
}

export default function DateModal({
  setCount
}: CountProps): ReactElement {

  return (
    <ModalContainer>

    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  border: none;
`;
