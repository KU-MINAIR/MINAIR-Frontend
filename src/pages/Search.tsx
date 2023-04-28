import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import VerticalLine from "@/components/VerticalLine";

export default function Search(): ReactElement {
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
        </Section>
        <VerticalLine height={"calc(90vh - 50px)"} color={"#d9d9d9"} />
        <Section>
          <SectionTitle>유사 여행지</SectionTitle>
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
