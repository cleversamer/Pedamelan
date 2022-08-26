import styled from "styled-components";
import Navbar from "components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Content></Content>
    </>
  );
};

const Content = styled.div`
  background-color: #f8fafc;
`;

export default Home;
