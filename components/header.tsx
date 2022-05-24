import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderSection>
        <Nav>
          <img
            style={{ height: "40px", cursor: "pointer" }}
            src="/icons/main-logo.png"
          />

          <Ul>
            <H1 style={{ color: "black" }}>როგორ მუშაობს</H1>
            <H1>Pricing</H1>
            <H1>Features</H1>
            <H1>About</H1>
          </Ul>
        </Nav>
      </HeaderSection>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeaderSection = styled("div")`
  width: 100%;
  max-width: 1600px;
  padding: 20px;
`;
const Nav = styled("div")`
  /* max-width: 100px; */
  display: flex;
  justify-content: space-between;
`;

const Ul = styled("div")`
  /* max-width: 100px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  gap: 3rem;
`;

const H1 = styled("h1")`
  font-size: 16px;
  color: #727272;
  cursor: pointer;
`;
