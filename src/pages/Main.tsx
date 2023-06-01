import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Bg from "@/assets/sky.jpg";
import { DiAptana } from "react-icons/di";

export default function Main(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Wrapper>
      <TopBar />
      <MainBody>
        <Background></Background>
        <Dimmed></Dimmed>
        <SearchTab>
          <SearchText>Travel on the cheapest day!</SearchText>
          <SearchBar
            height={"min(8vw, 9vh)"}
            departureP={"선택"}
            destinationP={"선택"}
            startDateP={""}
            endDateP={""}
            dayP={"선택"}
            peopleP={"선택"}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          ></SearchBar>
        </SearchTab>
      </MainBody>
      <Footer>
        <FooterLeft>
          <div>설정 </div>
          <DiAptana size="20" color="#000000" />
        </FooterLeft>
        <FooterRight>도움말</FooterRight>
      </Footer>
      {isLoading ? <LoadingSpinner /> : null}
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
  top: 36%;
  left: calc(50% - 40vw);
`;

const SearchText = styled.div`
  z-index: 10;
  font-size: 4.5vw;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-family: "KoHoRegular";
`;

const Footer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;

  width: 100%;
  bottom: 0;
  width: 100%;
  z-index: 3;
  padding: 10px 20px;
  font-size: 16px;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRight = styled.div``;
