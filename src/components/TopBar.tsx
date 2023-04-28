import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import LogoSrc from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
interface TopBarProps {
  children?: ReactElement;
}

export default function TopBar({ children }: TopBarProps): ReactElement {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoImg>
          <img src={LogoSrc} width="42px" height="40px" />
        </LogoImg>
        <LogoText>MIN AIR</LogoText>
      </Logo>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  top: 0;
  background-color: white;
`;

const Logo = styled.div`
  width: 120px;
  height: 100%;
  background-color: white;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.div`
  padding-top: 12px;
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: bolder;
  color: #2e6ca4;
  text-align: center;
  line-height: 0;
`;
