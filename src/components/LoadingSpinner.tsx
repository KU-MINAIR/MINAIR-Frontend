import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

export default function LoadingSpinner(): ReactElement {
  return (
    <DimmedPage>
      <PulseLoader color="#2e6ca4"></PulseLoader>
    </DimmedPage>
  );
}
const DimmedPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
