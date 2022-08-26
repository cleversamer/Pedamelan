import styled from "styled-components";

const Logo = () => {
  return (
    <Container>
      <Heading>Pedamelan</Heading>
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
`;

export default Logo;
