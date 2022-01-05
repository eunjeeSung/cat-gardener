import React, { Component } from "react";

import SearchBox from "./SearchBox";
import Header from "./Header";
import useSearchResult from "./SearchResult";

export default function App() {
  const { resultItem, setResult } = useSearchResult();
  return (
    <div>
      <Header />
      <SearchBox setResult={ setResult }/>
      <div>{resultItem}</div>
    </div>
  );
}