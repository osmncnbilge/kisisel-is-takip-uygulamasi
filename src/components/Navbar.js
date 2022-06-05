import React from "react";
import styled from "styled-components";
import { Container } from "@mui/system";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  border-bottom: 1px solid lightgray;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Container>
        <LogoImg src="/assets/logo.png" alt="logo" />
      </Container>
    </NavbarContainer>
  );
}

export default Navbar;
