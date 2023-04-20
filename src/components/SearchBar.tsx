import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";

export default function SearchBar(): ReactElement {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 9vh;
  width: 100%;
  background-color: white;
  border-radius: 30px;
`;
