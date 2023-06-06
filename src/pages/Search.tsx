import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import VerticalLine from "@/components/VerticalLine";
import { useLocation } from "react-router-dom";
import { WiDaySunny, WiCloudy, WiHail } from "react-icons/wi";
import axios, { AxiosResponse } from "axios";

interface RouteState {
  state: any;
}

export default function Search(): ReactElement {
  const state = (useLocation() as RouteState).state;
  const [similarTicketArr, setSimilarTicketArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `/api/similar-flights?flyFrom=${state.departure}&flyTo=${
  //         state.destination
  //       }&startDate=${state.startDate}&endDate=${state.endDate}&day=${parseInt(
  //         state.day
  //       )}&people=${parseInt(state.people)}`,
  //       {
  //         withCredentials: true,
  //         headers: {
  //           "Content-Type": `application/json`,
  //           "ngrok-skip-browser-warning": "69420",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setSimilarTicketArr(res.data.data);
  //     });
  // }, [similarTicketArr]);

  const renderTickets = (ticketArr: any) => {
    console.log(typeof ticketArr);
    return (
      <>
        {ticketArr &&
          ticketArr?.map((e: any, idx: number) => {
            // return <div>{e.country}</div>;
            return (
              <TicketWrapper onClick={(e2) => {}}>
                <ContentWrapper>
                  <CityName>
                    {e.cityName}, {e.countryName}
                  </CityName>
                  <Date>
                    {e.startDate.split("-").join(".")} -{" "}
                    {e.endDate.split("-").join(".")}
                  </Date>
                </ContentWrapper>
                <RightContent>
                  <WeatherWrapper>
                    <Weather>
                      {e.weather.lastestWeather === "맑음" ? (
                        <WiDaySunny size="40"></WiDaySunny>
                      ) : e.weather.lastestWeather === "흐림" ? (
                        <WiCloudy size="40"></WiCloudy>
                      ) : (
                        <WiHail size="40"></WiHail>
                      )}
                    </Weather>
                    <AverageTemperature>
                      {e.weather.averageTemperature} °C
                    </AverageTemperature>
                  </WeatherWrapper>
                  <Price>₩{e.price.toLocaleString("ko-KR")}</Price>
                </RightContent>
              </TicketWrapper>
            );
          })}
      </>
    );
  };
  return (
    <>
      <TopBar>
        <SearchBarWrapper>
          <SearchTab>
            <SearchBar
              height={"50px"}
              departureP={state.departure}
              destinationP={state.destination}
              startDateP={state.startDate}
              endDateP={state.endDate}
              dayP={state.day}
              peopleP={state.people}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            ></SearchBar>
          </SearchTab>
        </SearchBarWrapper>
      </TopBar>
      <BodyWrapper>
        <Section>
          <SectionTitle>최저가</SectionTitle>
          <ListContainer>{renderTickets(state.data)}</ListContainer>
        </Section>
        <VerticalLine height={"calc(90vh - 50px)"} color={"#d9d9d9"} />
        <Section>
          <SectionTitle>유사 여행지</SectionTitle>
          <ListContainer>{renderTickets(similarTicketArr)}</ListContainer>
        </Section>
      </BodyWrapper>
      {isLoading ? <LoadingSpinner /> : null}
    </>
  );
}

const SearchBarWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const SearchTab = styled.div`
  width: 90%;
  flex-direction: column;
  position: relative;
  top: 0;
  z-index: 10;
`;

const BodyWrapper = styled.div`
  background-color: #f6f8fe;
  margin-top: 50px;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  height: 100%;
  width: min(calc(100% - 0.5px), 800px);
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  overflow-x: hidden;

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
  &:hover {
    background-color: #ebeef0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
`;
const CityName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 2px;
  overflow: hidden;
`;

const CountryName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 12px;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AverageTemperature = styled.div`
  font-size: 14px;
  margin-top: -6px;
`;
const Weather = styled.div``;

const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 40px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
