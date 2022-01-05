import styled from "styled-components";

const Title = styled.h1`
  color: black;
  text-align: center;
`;

const Description = styled.h3`
  color: black;
  text-align: center;
`;

const Header = () => {
  return <div>
    <Title>고양이 정원사</Title>
    <Description>이 식물은 고양이에게 안전한가요?</Description>
  </div>
};

export default Header;