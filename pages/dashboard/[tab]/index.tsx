import { GetStaticProps } from "next";
import React, { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import MainSection from "../../../components/dashboard/tabs/main";
import styled from "styled-components";
import { AuthContext } from "../../../context/authContext";
import Student from "../../../components/dashboard/tabs/student";
import Navigation from "../../../components/dashboard/navigation";

const DashboardPage = () => {
  const [activeNav, setActiveNav] = useState("main");
  const ctx = useContext(AuthContext);

  const router = useRouter();
  const tab = router.query.tab;

  const renderComponent = () => {
    switch (tab) {
      case "main":
        return <MainSection {...ctx} />;
      case "student":
        return <Student {...ctx} />;
    }
  };

  return (
    <div>
      <DashboardContainer>
        <DashboardSection>
          <Navigation
            {...ctx}
            setActiveNav={setActiveNav}
            activeNav={activeNav}
          />
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

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const tab = params?.tab ? params?.tab ?? null : null;
  return {
    props: {
      tab,
    },
  };
};
