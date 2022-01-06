import styled from "styled-components";
import { useState } from "react";

const StyledSearchResult = styled.h4`
  color: #fff4e8;
  margin: 2em auto;
  text-align: center;
  width: 80%;
  max-width: 500px;
`;

const StyledButton = styled.a`
  color: #265a43;
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: #fff4e8;
  border: 2px solid #fff4e8;
  border-radius: 10px;
  text-decoration: none;
`;

const StyledButtonWrap = styled.div`
  display: inline-block;
`;

function ReferenceButton(props) {
  const { result } = props;
  return (
    <StyledButtonWrap>
      <StyledButton href={result[0].url} target="_blank">원문 보기</StyledButton>
    </StyledButtonWrap>
  );
}

export default function useSearchResult() {
  const [result, setResult] = useState(null);
  let resultItem = null;

  if (!result) {
    resultItem = (
      <div></div>
    )
  } else if (result.length !== 0 && result[0].danger === "위험") {
    resultItem = (
      <StyledSearchResult>
        {`${result[0].name}은(는) 고양이에게 🚨위험해요`}
        <ReferenceButton result={ result } />
      </StyledSearchResult>
    );
  } else if(result.length !== 0 && result[0].danger === "안전") {
    resultItem = (
      <StyledSearchResult>
        {`${result[0].name}은(는) 고양이에게 안전해요 🥳`}
        <ReferenceButton result={ result } />
      </StyledSearchResult>
    );
  } else {
    resultItem = (
      <StyledSearchResult>
        모르는 식물이에요 😥
      </StyledSearchResult>
    );
  }

  return {
    "resultItem": resultItem,
    "setResult": setResult
  };
}