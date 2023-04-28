import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import VerticalLine from "@/components/VerticalLine";

export default function Search(): ReactElement {
  const TicketArr = [{}, {}, {}, {}, {}, {}, {}, {}];
  const renderCities = () => {
    return (
      <>
        {TicketArr.map((e) => {
          // return <div>{e.country}</div>;
          return <TicketWrapper onClick={(e2) => {}}></TicketWrapper>;
        })}
      </>
    );
  };

  return (
    <>
      <TopBar>
        <SearchBarWrapper>
          <SearchTab>
            <SearchBar height={"50px"}></SearchBar>
          </SearchTab>
        </SearchBarWrapper>
      </TopBar>
      <BodayWrapper>
        <Section>
          <SectionTitle>최저가</SectionTitle>
          <ListContainer>{renderCities()}</ListContainer>
        </Section>
        <VerticalLine height={"calc(90vh - 50px)"} color={"#d9d9d9"} />
        <Section>
          <SectionTitle>유사 여행지</SectionTitle>
          <ListContainer>{renderCities()}</ListContainer>
        </Section>
      </BodayWrapper>
    </>
  );
}

const SearchBarWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SearchTab = styled.div`
  width: 90%;
  flex-direction: column;
  position: relative;
  top: 0;
`;

const BodayWrapper = styled.div`
  background-color: #f6f8fe;
  margin-top: 50px;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
`;

const Section = styled.div`
  height: 100%;
  width: calc(100% - 0.5px);
  padding: 40px;
`;

const SectionTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 90%;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #edece9;
  }
  &::-webkit-scrollbar-thumb {
    background: #d3d1cb;
    border-radius: 6px;
  }
`;

const TicketWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background-color: white;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid #d9d9d9;

  margin: 10px 0;
  &:hover {
    background-color: #ebeef0;
  }
`;
