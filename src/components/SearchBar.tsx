import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import SearchBtn from "@/assets/searchBtn.png";
import Modal from "./modal/Modal";
import DimmedLayer from "./modal/DimmedLayer";
import CityModal from "./modal/CityModal";
import DateModal from "./modal/DateModal";
import VerticalLine from "@/components/VerticalLine";

export default function SearchBar(): ReactElement {
  const [departure, setDeparture] = useState("선택");
  const [destination, setDestination] = useState("선택");
  const [startDate, setStartDate] = useState("");
  const [clickStartDate, setClickStartDate] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [day, setDay] = useState();
  const [people, setPeople] = useState();

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
    setDayModal(!dayModal);
  };
  const handlePeopleModal = () => {
    setPeopleModal(!peopleModal);
  };
  const handleAllModal = () => {
    setDepartureModal(false);
    setDestinationModal(false);
    setDateModal(false);
    setDayModal(false);
    setPeopleModal(false);
    setClickStartDate(false);
  };

  return (
    <Wrapper>
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
      <VerticalLine />
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
      <VerticalLine />
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
      <VerticalLine />
      <Count onClick={handleDayModal}>
        <ContentTitle>여행 일수</ContentTitle>
        <Content>{day}</Content>
        {dayModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"250px"}
              height={"200px"}
              position={["105%", "0", "", ""]}
            >
              <></>
            </Modal>
          </>
        )}
      </Count>
      <VerticalLine />
      <Count onClick={handlePeopleModal}>
        <ContentTitle>인원</ContentTitle>
        <Content>{people}</Content>
        {peopleModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"250px"}
              height={"200px"}
              position={["105%", "0", "", ""]}
            >
              <></>
            </Modal>
          </>
        )}
      </Count>
      <SearchButton></SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: min(8vw, 9vh);
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
`;

const Date = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Count = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
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
`;
