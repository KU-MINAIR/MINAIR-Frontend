import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import SearchBtn from "@/assets/searchBtn.png";
import Modal from "./modal/Modal";
import DimmedLayer from "./modal/DimmedLayer";
import CityModal from "./modal/CityModal";
import DateModal from "./modal/DateModal";
import CountModal from "./modal/CountModal";
import VerticalLine from "@/components/VerticalLine";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  height: string;
}

export default function SearchBar({ height }: SearchBarProps): ReactElement {
  let navigate = useNavigate();

  const [departure, setDeparture] = useState("선택");
  const [destination, setDestination] = useState("선택");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [day, setDay] = useState("선택");
  const [people, setPeople] = useState("선택");

  const [clickStartDate, setClickStartDate] = useState(false);
  const [clickCount, setClickCount] = useState(false);

  const [departureModal, setDepartureModal] = useState(false);
  const [destinationModal, setDestinationModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [dayModal, setDayModal] = useState(false);
  const [peopleModal, setPeopleModal] = useState(false);

  const setDepartureFunc = (departure: string) => {
    setDeparture(departure);
  };
  const setDestinationFunc = (destination: string) => {
    setDestination(destination);
  };
  const setStartDateFunc = (startDate: string, endDate: string) => {
    setStartDate(startDate);
    setClickStartDate(true);
  };

  const setEndDateFunc = (endDate: string) => {
    setEndDate(endDate);
    setDateModal(false);
    setClickStartDate(false);
  };

  const setDayFunc = (day: number) => {
    setDay(day.toString() + "일");
    setClickCount(true);
  };

  const setPeopleFunc = (people: number) => {
    setPeople(people.toString() + "명");
    setClickCount(true);
  };

  const handleDepartureModal = () => {
    setDepartureModal(!departureModal);
  };
  const handleDestinationModal = () => {
    setDestinationModal(!destinationModal);
  };
  const handleDateModal = () => {
    if (clickStartDate) {
      return;
    }
    setClickStartDate(!clickStartDate);
    setDateModal(!dateModal);
  };
  const handleDayModal = () => {
    if (clickCount) {
      return;
    }
    setDayModal(!dayModal);
  };
  const handlePeopleModal = () => {
    if (clickCount) {
      return;
    }
    setPeopleModal(!peopleModal);
  };
  const handleAllModal = () => {
    setDepartureModal(false);
    setDestinationModal(false);
    setDateModal(false);
    setDayModal(false);
    setPeopleModal(false);
    setClickStartDate(false);
    setClickCount(false);
  };

  return (
    <Wrapper height={height}>
      <City onClick={handleDepartureModal}>
        <ContentTitle>출발지</ContentTitle>
        <Content>{departure}</Content>
        {departureModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"250px"}
              height={"200px"}
              position={["105%", "", "", ""]}
            >
              <CityModal setCity={setDepartureFunc}></CityModal>
            </Modal>
          </>
        )}
      </City>
      <VerticalLine height={"50%"} color={"#ebeef0"} />
      <City onClick={handleDestinationModal}>
        <ContentTitle>도착지</ContentTitle>
        <Content>{destination}</Content>
        {destinationModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"250px"}
              height={"200px"}
              position={["105%", "", "", ""]}
            >
              <CityModal setCity={setDestinationFunc}></CityModal>
            </Modal>
          </>
        )}
      </City>
      <VerticalLine height={"50%"} color={"#ebeef0"} />
      <Date onClick={handleDateModal}>
        <ContentTitle>기간</ContentTitle>
        <Content>
          {startDate} - {endDate}
        </Content>
        {dateModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"100%"}
              height={"0"}
              position={["105%", "0%", "", ""]}
            >
              <DateModal
                setStartDate={setStartDateFunc}
                setEndDate={setEndDateFunc}
                startDate={startDate}
                endDate={endDate}
              ></DateModal>
            </Modal>
          </>
        )}
      </Date>
      <VerticalLine height={"50%"} color={"#ebeef0"} />
      <Count onClick={handleDayModal}>
        <ContentTitle>여행 일수</ContentTitle>
        <Content>{day}</Content>
        {dayModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal width={""} height={""} position={["105%", "", "", ""]}>
              <CountModal setCount={setDayFunc}></CountModal>
            </Modal>
          </>
        )}
      </Count>
      <VerticalLine height={"50%"} color={"#ebeef0"} />
      <Count onClick={handlePeopleModal}>
        <ContentTitle>인원</ContentTitle>
        <Content>{people}</Content>
        {peopleModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal width={""} height={""} position={["105%", "0", "", ""]}>
              <CountModal setCount={setPeopleFunc}></CountModal>
            </Modal>
          </>
        )}
      </Count>
      <SearchButton
        onClick={() => {
          navigate(`/flights?departure=${departure}`);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<SearchBarProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${(props) => props.height};
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding-left: 10px;
`;

const City = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding-left: 10px;
`;

const Date = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding-left: 10px;
`;

const Count = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding-left: 10px;
`;

const ContentTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Content = styled.div`
  color: #4f4f4f;
  height: 18px;
  font-size: 14px;
  padding-left: 1px;
`;

const SearchButton = styled.button`
  background-image: url(${SearchBtn});
  border-radius: 100%;
  width: min(4vw, 40px);
  height: min(4vw, 40px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;