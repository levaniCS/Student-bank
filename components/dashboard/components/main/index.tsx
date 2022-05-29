import styled from "styled-components";
import { AuthAndNavProps } from "../../../../utils/form.interfaces";
import MainContent from "../mainContent/mainContent";


const MainSection = ({ status, user, activeNav, setActiveNav, students } : AuthAndNavProps) => {
  return (
    <MainSectionComponent>
      <MainContainer>
        <Header>
          <Title>მთავარი</Title>
          <Profile>
            <img style={{ width: "30px" }} src="/icons/search.svg" alt="" />
            <ProfilePhoto src="/images/profile.jpg" alt="" />
            {status.loggedIn && <Title>{`${user.userDetails.name} - ${user.userDetails.isParent ? 'Parent' : 'Child'}`}</Title>}
          </Profile>
        </Header>
        <MainContent activeNav={activeNav} setActiveNav={setActiveNav} status={status} user={user} students={students} />
      </MainContainer>
    </MainSectionComponent>
  );
};

export default MainSection;

const MainSectionComponent = styled("div")`
  width: 86%;
  height: 100%;
  margin: 1rem;
`;
const MainContainer = styled("div")`
  width: 100%;
`;

const Header = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled("h1")`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
const Profile = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ProfilePhoto = styled("img")`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

