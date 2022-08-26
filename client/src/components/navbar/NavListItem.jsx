import styled from "styled-components";
import { Link } from "react-router-dom";

const NavListItem = ({ Icon, iconSize = "small", title, link = "/" }) => {
  return (
    <Container>
      <Link to={link}>
        <Icon fontSize={iconSize} color="#DC3026" />
        <Title>{title}</Title>
      </Link>
    </Container>
  );
};

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #302c2b;
  font-family: "Roboto", sans-serif;
`;

const Container = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 15px 20px;
    border-radius: 30px;
    transition: all 176ms;

    :hover {
      background-color: rgba(220, 48, 38, 0.05);

      ${Title} {
        color: rgba(220, 48, 38, 0.8);
      }
    }
  }

  svg {
    color: #dc3026;
  }
`;

export default NavListItem;
