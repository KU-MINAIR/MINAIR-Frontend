import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";

interface CityProps {
  setCity: Function;
}

export default function CityModal({ setCity }: CityProps): ReactElement {
  const cityArr = [
    {
      country: "대한민국",
      city: "인천",
      airportEng: "ICN",
      airportKor: "인천국제공항",
    },
    {
      country: "일본",
      city: "오사카",
      airportEng: "KIX",
      airportKor: "간사이국제공항",
    },
    {
      country: "일본",
      city: "도쿄",
      airportEng: "NRT",
      airportKor: "나리타국제공항",
    },
    {
      country: "일본",
      city: "도쿄",
      airportEng: "HND",
      airportKor: "하네다국제공항",
    },
    {
      country: "일본",
      city: "후쿠오카",
      airportEng: "FUK",
      airportKor: "후쿠오카공항",
    },
    {
      country: "일본",
      city: "오키나와",
      airportEng: "OKA",
      airportKor: "나하공항",
    },
    {
      country: "일본",
      city: "삿포로",
      airportEng: "CTS",
      airportKor: "치토세공항",
    },
    {
      country: "일본",
      city: "나고야",
      airportEng: "NGO",
      airportKor: "주부국제공항",
    },
  ];

  const renderCities = () => {
    return (
      <>
        {cityArr.map((e) => {
          // return <div>{e.country}</div>;
          return (
            <CityWrapper
              onClick={(e2) => {
                setCity(e.airportEng);
              }}
            >
              <CityName>
                {e.city}, {e.country}
              </CityName>
              <AirportName>{e.airportEng}</AirportName>
              <VerticalLine></VerticalLine>
              <AirportName>{e.airportKor}</AirportName>
            </CityWrapper>
          );
        })}
      </>
    );
  };
  return <ModalContainer>{renderCities()}</ModalContainer>;
}
const VerticalLine = styled.div`
  width: 0px;
  height: 12px;
  border-left: 1px solid #ebeef0;
`;

const CityWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px #ebeef0 solid;
  padding: 2px;

  &:hover {
    background-color: #ebeef0;
  }
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const CityName = styled.div`
  font-size: 14px;
  margin: 6px;
`;

const AirportName = styled.div`
  font-size: 12px;
  color: #62a7ee;
  margin: 0 4px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #edece9;
  }
  &::-webkit-scrollbar-thumb {
    background: #d3d1cb;
    border-radius: 6px;
  }
`;
