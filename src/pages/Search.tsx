import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import VerticalLine from "@/components/VerticalLine";
import Skeleton from "@/components/Skeleton";
import { useLocation } from "react-router-dom";
import { WiDaySunny, WiCloudy, WiHail } from "react-icons/wi";
import axios, { AxiosResponse } from "axios";
import Bg1 from "@/assets/background/bg1.jpg";
import Bg2 from "@/assets/background/bg2.jpg";
import Bg3 from "@/assets/background/bg3.jpg";
import Bg4 from "@/assets/background/bg4.jpg";
import Bg5 from "@/assets/background/bg5.jpg";
import Bg6 from "@/assets/background/bg6.jpg";
import Bg7 from "@/assets/background/bg7.jpg";

interface BackgroundImageProps {
  src: any;
}
interface ListContainerProps {
  height: string;
}
interface RouteState {
  state: any;
}

export default function Search(): ReactElement {
  const state = (useLocation() as RouteState).state;
  const [similarTicketArr, setSimilarTicketArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSkeleton, setIsSkeleton] = useState(true);
  const [bg, setBg] = useState("");
  const bgArr = [Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7];
  useEffect(() => {
    setBg(bgArr[Math.floor(Math.random() * 7)]);
    setIsSkeleton(true);
    setSimilarTicketArr([]);
    axios
      .get(
        `/api/similar-flights?flyFrom=${state.departure}&flyTo=${
          state.destination
        }&startDate=${state.startDate}&endDate=${state.endDate}&day=${parseInt(
          state.day
        )}&people=${parseInt(state.people)}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": `application/json`,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      )
      .then((res) => {
        setSimilarTicketArr(res.data.data);
        setIsSkeleton(false);
      });
  }, [state.data]);

  const renderTickets = (data: any, flag: number) => {
    if (!data) return;
    return (
      <>
        {data.flights &&
          data.flights.map((e: any, idx: number) => {
            // return <div>{e.country}</div>;
            return (
              <TicketWrapper
                onClick={(e2) => {
                  if (flag == 1) {
                    axios
                      .patch(
                        `/api/cities/${state.data.cityId}/target-cities/${data.cityId}`,
                        {
                          withCredentials: true,
                          headers: {
                            "Content-Type": `application/json`,
                            "ngrok-skip-browser-warning": "69420",
                          },
                        }
                      )
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((e) => console.log(e));
                  }
                  window.open(e.link);
                }}
              >
                <ContentWrapper>
                  <CityName>
                    {data.cityName}, {data.countryName}
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
      <Dimmed></Dimmed>
      <BodyWrapper src={bg}>
        <Section>
          <SectionTitle>cheapest day !</SectionTitle>
          <ListContainerBox>
            <ListContainer height={"100%"}>
              {renderTickets(state.data, 0)}
            </ListContainer>
          </ListContainerBox>
        </Section>
        {/* <VerticalLine height={"calc(90vh - 50px)"} color={"#d9d9d9"} /> */}
        <Section>
          <SectionTitle>how about ...</SectionTitle>
          <ListContainerBox>
            {isSkeleton ? (
              <SkeletonListContainer height={"360px"}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </SkeletonListContainer>
            ) : (
              <ListContainer height={"360px"}>
                {renderTickets(similarTicketArr[0], 1)}
              </ListContainer>
            )}
            {isSkeleton ? (
              <SkeletonListContainer height={"360px"}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </SkeletonListContainer>
            ) : (
              <ListContainer height={"360px"}>
                {renderTickets(similarTicketArr[1], 1)}
              </ListContainer>
            )}
          </ListContainerBox>
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

const BodyWrapper = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 50px;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -3;
`;

const Section = styled.div`
  height: 100%;
  width: min(calc(100% - 0.5px), 800px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const SectionTitle = styled.div`
  margin-left: 4px;
  font-size: 30px;
  z-index: 10;
  color: white;
  font-family: "KoHoRegular";
  font-weight: 500;
  z-index: 10;
`;

const ListContainer = styled.div<ListContainerProps>`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 6px;
    /* background-color: #edece9; */
  }
  &::-webkit-scrollbar-thumb {
    background: #d3d1cbb9;
    border-radius: 6px;
  }
`;

const SkeletonListContainer = styled.div<ListContainerProps>`
  opacity: 0.9;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 10;
`;

const TicketWrapper = styled.div`
  opacity: 0.9;
  cursor: pointer;
  align-items: center;
  display: flex;
  width: 100%;
  background-color: white;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  z-index: 10;

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
  z-index: 10;
`;
const CityName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 2px;
  overflow: hidden;
  z-index: 10;
`;

const CountryName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 12px;
  z-index: 10;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;
const AverageTemperature = styled.div`
  font-size: 14px;
  margin-top: -6px;
  z-index: 10;
`;
const Weather = styled.div``;

const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 48px;
  z-index: 10;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
`;

const ListContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 94%;
  z-index: 10;
`;

const HorizontalLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: red;
`;

const Dimmed = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  /* background-color: rgba(256, 256, 256, 0.2); */
  background-color: rgba(0, 0, 0, 0.2);
`;
