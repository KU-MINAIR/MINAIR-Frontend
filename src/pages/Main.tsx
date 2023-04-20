import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
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
          <SearchBar></SearchBar>
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
  width: 50vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 34%;
  left: calc(50% - 25vw);
`;

const SearchText = styled.div`
  z-index: 10;
  font-size: 3.9vw;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  height: 90px;
  background-color: blue;
`;

const Footer = styled.div`
  height: max(20px, 20%);
  width: 100%;
  background-color: #f5f5f7;
  z-index: 3;
`;
