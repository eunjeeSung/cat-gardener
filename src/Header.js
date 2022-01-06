import styled from "styled-components";
import cat_pic from "./cat.png";

const Title = styled.h1`
  color: #fff4e8;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.h4`
  color: #fff4e8;
  text-align: center;
`;

const StyledImageDiv = styled.div`
  text-align: center;
  margin: auto;
`;

const Header = () => {
  return <div>
    <StyledImageDiv><img src={ cat_pic } width={ 100 } /></StyledImageDiv>
    <Title>고양이 정원사</Title>
    <Description>어떤 식물이 고양이에게 안전할까요?</Description>
  </div>
};

export default Header;