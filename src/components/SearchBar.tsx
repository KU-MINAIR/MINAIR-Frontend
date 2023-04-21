import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import SearchBtn from "@/assets/searchBtn.png";
import Modal from "./modal/Modal";
import DimmedLayer from "./modal/DimmedLayer";
import CityModal from "./modal/CityModal";

export default function SearchBar(): ReactElement {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureModal, setDepartureModal] = useState(false);
  const [destinationModal, setDestinationModal] = useState(false);

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

  const handleAllModal = () => {
    setDepartureModal(false);
    setDestinationModal(false);
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
              position={["100%", "", "", ""]}
            >
              <CityModal setCity={setDepartureFunc}></CityModal>
            </Modal>
          </>
        )}
      </City>
      <City onClick={handleDestinationModal}>
        <ContentTitle>도착지</ContentTitle>
        <Content>{destination}</Content>
        {destinationModal && (
          <>
            <DimmedLayer onClick={handleAllModal}></DimmedLayer>
            <Modal
              width={"250px"}
              height={"200px"}
              position={["100%", "", "", ""]}
            >
              <CityModal setCity={setDestinationFunc}></CityModal>
            </Modal>
          </>
        )}
      </City>
      <Date>
        <ContentTitle>기간</ContentTitle>
        <Content>{}</Content>
      </Date>
      <Count>
        <ContentTitle>여행 일수</ContentTitle>
        <Content>{}</Content>
      </Count>
      <Count>
        <ContentTitle>인원</ContentTitle>
        <Content>{}</Content>
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
  padding-left: 2px;
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
