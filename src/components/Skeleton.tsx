import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";

export default function Skeleton(): ReactElement {
  return (
    <SkeletonWrapper>
      <ContentWrapper>
        <CityName></CityName>
        <Date></Date>
      </ContentWrapper>
      <RightContent>
        <WeatherWrapper>
          <Weather></Weather>
        </WeatherWrapper>
        <Price></Price>
      </RightContent>
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  background-color: white;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  z-index: 0;
  margin-bottom: 20px;
  padding: 0 20px;
  justify-content: space-between;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.35);
    }
    100% {
      background-color: rgba(165, 165, 165, 0);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const CityName = styled.div`
  background-color: #f2f2f2;
  width: 110px;
  height: 20px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 2px;
  overflow: hidden;
`;

const Date = styled.div`
  background-color: #f2f2f2;
  width: 120px;
  height: 12px;
  margin-top: 4px;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Weather = styled.div`
  background-color: #f2f2f2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Price = styled.div`
  background-color: #f2f2f2;
  width: 110px;
  height: 30px;
  margin-left: 30px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
