import styled from "styled-components";

const Title = styled.h1`
  color: black;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.h3`
  color: black;
  text-align: center;
`;

const Header = () => {
  return <div>
    <Title>고양이 정원사</Title>
    <Description>어떤 식물이 고양이에게 안전할까요?</Description>
  </div>
};

export default Header;