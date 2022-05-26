import React from "react";
import styled from "styled-components";
import MainSection from "./components/main";
import Navigation from "./components/navigation";

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <DashboardSection>
        <Navigation />
        <MainSection />
      </DashboardSection>
    </DashboardContainer>
  );
};

export default DashboardPage;

const DashboardContainer = styled("div")`
  height: 100vh;
  background: #f6f8fb40;
`;
const DashboardSection = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: #f6f8fb40;
`;
