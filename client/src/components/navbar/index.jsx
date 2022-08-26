import styled from "styled-components";
import Logo from "./Logo";
import NavAccountInfo from "./NavAccountInfo";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <NavList />
      <NavAccountInfo />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #fff;
`;

export default Navbar;
