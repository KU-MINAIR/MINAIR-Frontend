import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import LogoSrc from "@/assets/logo.png";

export default function TopBar(): ReactElement {
  return (
    <Wrapper>
      <Logo>
        <LogoImg>
          <img src={LogoSrc} width="42px" height="40px" />
        </LogoImg>
        <LogoText>MIN AIR</LogoText>
      </Logo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const Logo = styled.div`
  width: 120px;
  height: 100%;
  background-color: white;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
