import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import styled from "styled-components";

import data from './data';

const StyledSearchBox = styled.div`
  text-align: center;
  width: 40%;
  margin: 2em auto;
`;

const style = {
    border: "2.5px solid #265a43",
    color: "#265a43",
    fontFamily: "Gowun Dodum",
    iconColor: "#265a43",
    lineColor: "rgb(232, 234, 237)",
    placeholderColor: "#265a43",
  };

function SearchBox({ setResult }) {
  function handleOnSearchWrapper(string, results) {
    setResult(results);
  }

  return (
    <StyledSearchBox>
      <ReactSearchAutocomplete
        items={data}
        placeholder={"식물을 검색해 보세요 🌿"}
        onSearch={handleOnSearchWrapper}
        autoFocus
        styling={style}
      />
    </StyledSearchBox>
  );
}

export default SearchBox;