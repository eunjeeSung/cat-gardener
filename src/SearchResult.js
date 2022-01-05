import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledSearchResult = styled.h4`
  color: "green";
`;

const Button = styled.a`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`;

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
        <Button href={result[0].url} target="_blank">원문 보기</Button>
      </StyledSearchResult>
    );
  } else if(result.length !== 0 && result[0].danger === "안전") {
    resultItem = (
      <StyledSearchResult>
        {`${result[0].name}은(는) 고양이에게 안전해요 🥳`}
        <Button href={result[0].url} target="_blank">원문 보기</Button>
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