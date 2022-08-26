import React from "react";
import styled from "styled-components";
import { Notifications, Person } from "@mui/icons-material";

const NavAccountInfo = () => {
  return (
    <Container>
      <IconsContainer>
        <Notifications />
        <Person />
      </IconsContainer>

      <InfoContainer>
        <Heading>Samer Alsaadawi</Heading>

        <SubHeading>thedev.samer@gmail.com</SubHeading>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    color: #303030;
    background-color: #f8fafc;
    padding: 12px;
    box-sizing: content-box;
    border-radius: 50%;
    transition: all 176ms;
    cursor: pointer;

    :hover {
      background-color: rgba(220, 48, 38, 0.05);
      color: #dc3026;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Heading = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

const SubHeading = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #e3e6e9;
`;

export default NavAccountInfo;
