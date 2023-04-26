import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import SearchBtn from "@/assets/searchBtn.png";
import Modal from "./modal/Modal";
import DimmedLayer from "./modal/DimmedLayer";
import CityModal from "./modal/CityModal";
import VerticalLine from "@/components/VerticalLine";

export default function SearchBar(): ReactElement {
  const [departure, setDeparture] = useState("선택");
  const [destination, setDestination] = useState("선택");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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

  const handleDepartureModal = () => {
    setDepartureModal(!departureModal);
  };

  const handleDestinationModal = () => {
    setDestinationModal(!destinationModal);
  };

  const handleDateModal = () => {
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
              height={"250px"}
              position={["105%", "0%", "", ""]}
            >
              <></>
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
  width: 16%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Date = styled.div`
  width: 20%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Count = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
