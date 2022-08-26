import styled from "styled-components";
import NavListItem from "./NavListItem";
import {
  Work,
  EmojiObjectsOutlined,
  AccountCircle,
  AssignmentOutlined,
} from "@mui/icons-material";

const NavList = () => {
  return (
    <Container>
      <NavListItem Icon={Work} title="Find work" />
      <NavListItem
        Icon={EmojiObjectsOutlined}
        iconSize="medium"
        title="Message"
      />
      <NavListItem Icon={AccountCircle} title="My profile" />
      <NavListItem Icon={AssignmentOutlined} title="Overview" />
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export default NavList;
