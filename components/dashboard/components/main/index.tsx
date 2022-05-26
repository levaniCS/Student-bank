import styled from "styled-components";

const MainSection = () => {
  return (
    <MainSectionComponent>
      <MainContainer>
        <Header>
          <Title>მთავარი</Title>
          <Profile>
            <img style={{ width: "30px" }} src="/icons/search.svg" alt="" />
            <ProfilePhoto src="/images/profile.jpg" alt="" />
          </Profile>
        </Header>
        <Container>
          <MyCard>
            <Card src="/images/card.png" alt="" />
            <Balance>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/icons/mastercard.svg" alt="" />
                  <BalanceTitle style={{ fontSize: "14px" }}>
                    ბალანსი
                  </BalanceTitle>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "right",
                  }}
                >
                  <BalanceTitle style={{ fontSize: "24px" }}>
                    ₾ 800
                  </BalanceTitle>
                  <BalanceTitle style={{ fontSize: "14px", color: "#61BB84" }}>
                    $ 266
                  </BalanceTitle>
                </div>
              </div>
            </Balance>
          </MyCard>
        </Container>
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
const Container = styled("div")``;

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

const Card = styled("img")`
  width: 350px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
const MyCard = styled("div")`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const Balance = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  width: 85%;
  border-radius: 20px;
  padding: 15px;
  margin-left: 1.5rem;
`;
const BalanceTitle = styled("h1")`
  font-size: 14px;
  color: #798ba3;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
