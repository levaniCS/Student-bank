import { GetStaticProps } from "next";
import React, { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import MainSection from "../../../components/dashboard/tabs/main";
import styled from "styled-components";
import { AuthContext } from "../../../context/authContext";
import Student from "../../../components/dashboard/tabs/student";
import Navigation from "../../../components/dashboard/navigation";
import GoalsTab from "../../../components/dashboard/tabs/goals";

const DashboardPage = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const tab = router.query.tab;


  const renderComponent = () => {
    switch (tab) {
      case "main":
        return <MainSection {...ctx} />;
      case "student":
        return <Student {...ctx} />;
      case "goals":
        return <GoalsTab {...ctx} />;
    }
  };

  return (
    <div>
      <DashboardContainer>
        <DashboardSection>
          <Navigation {...ctx} />
          {renderComponent()}
        </DashboardSection>
      </DashboardContainer>
    </div>
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