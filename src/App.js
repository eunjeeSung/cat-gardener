import React, { Component } from "react";
import styled from "styled-components";

import SearchBox from "./SearchBox";
import Header from "./Header";
import useSearchResult from "./SearchResult";

const StyledAppBox = styled.div`
  margin-top: 10%;
`;

export default function App() {
  const { resultItem, setResult } = useSearchResult();
  return (
    <StyledAppBox>
      <Header />
      <SearchBox setResult={ setResult }/>
      <div>{resultItem}</div>
    </StyledAppBox>
  );
}