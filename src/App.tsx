import React from "react";
import GlobalStyle from "@/styles/GlobalStyle";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import Search from "@/pages/Search";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<div>404 Not Found Page</div>}></Route>
          <Route path="/flights" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
