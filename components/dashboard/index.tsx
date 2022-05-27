import React, { useContext } from "react";
import styled from "styled-components";
import MainSection from "./components/main";
import Navigation from "./components/navigation";
import { AuthContext } from '../../context/authContext';


const DashboardPage = () => {
  const { status, user } = useContext(AuthContext);


  return (
    <DashboardContainer>
      <DashboardSection>
        <Navigation status={status} user={user} />
        <MainSection status={status} user={user} />
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
