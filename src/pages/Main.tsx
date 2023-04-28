import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import Bg from "@/assets/sky.jpg";

export default function Main(): ReactElement {
  return (
    <Wrapper>
      <TopBar />
      <MainBody>
        <Background></Background>
        <Dimmed></Dimmed>
        <SearchTab>
          <SearchText>Travel on the cheapest day!</SearchText>
          <SearchBar height={"min(8vw, 9vh)"}></SearchBar>
        </SearchTab>
      </MainBody>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainBody = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Dimmed = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.1);
`;

const SearchTab = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 34%;
  left: calc(50% - 40vw);
`;

const SearchText = styled.div`
  z-index: 10;
  font-size: 3.9vw;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  height: max(20px, 15%);
  width: 100%;
  background-color: #f2f2f2;
  z-index: 3;
`;