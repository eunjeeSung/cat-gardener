import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import styled from "styled-components";

import data from './data';

function SearchBox({ setResult }) {
  function handleOnSearchWrapper(string, results) {
    setResult(results);
  }

  return (
    <div style={{ width: 400 }}>
      <ReactSearchAutocomplete
        items={data}
        placeholder={"식물을 검색해 보세요"}
        onSearch={handleOnSearchWrapper}
        autoFocus
        styling={{ color: "tomato" }}
      />
  </div>
  );
}

export default SearchBox;