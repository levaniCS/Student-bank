import Link from "next/link";
import styled from "styled-components";
import {
  AuthAndNavProps,
  RegisterDataProps,
} from "../../../../utils/form.interfaces";
import { StyledButton } from "../../../forms/formStyles";

// interface Main {
//   status?: any;
//   user?: any;
//   setActiveNav?: any;
//   activeNav?: any;
//   students?: any;
// }

const MainSection = ({ students, setActiveNav }: AuthAndNavProps) => {
  // const list = students || [];

  // const renderStudentList = () =>
  //   list.map((i: RegisterDataProps, idx: number) => {
  //     return (
  //       <StudentItem key={idx}>
  //         <p>{i.name}</p>
  //         <p>{i.surname}</p>
  //         <p>{i.email}</p>
  //       </StudentItem>
  //     );
  //   });

  return (
    <MainSectionComponent>
      <MainContainer>
        <Header>
          <Title>მთავარი</Title>
          <Profile>
            <img style={{ width: "30px" }} src="/icons/search.svg" alt="" />
            <ProfilePhoto src="/images/profile.jpg" alt="" />
            {/* {status.loggedIn && (
              <Title>{`${user.userDetails.name} - ${
                user.userDetails.isParent ? "Parent" : "Child"
              }`}</Title>
            )} */}
          </Profile>
        </Header>
      </MainContainer>
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
                <BalanceTitle style={{ fontSize: "24px" }}>₾ 800</BalanceTitle>
                <BalanceTitle style={{ fontSize: "14px", color: "#61BB84" }}>
                  $ 266
                </BalanceTitle>
              </div>
            </div>
          </Balance>
        </MyCard>

        {/* სია */}
        {/* {list.length > 0 && (
          <>
            <StyledTitle>მოსწავლეები</StyledTitle>
            <StyledHeader>
              <p>სახელი</p>
              <p>გვარი</p>
              <p>ელ ფოსტა</p>
            </StyledHeader>
          </>
        )}
        <StudentList>
          {list.length > 0 ? (
            renderStudentList()
          ) : (
            <>
              <BalanceTitle style={{ fontSize: 18, marginTop: 50 }}>
                თქვენ არ დაგიმატებიათ მოსწავლის ანგარიში
              </BalanceTitle>
              <Link href={`/dashboard/student`}>
                <StyledButton style={{ width: 400 }}>
                  დაამატეთ აქიდან
                </StyledButton>
              </Link>
            </>
          )}
        </StudentList> */}
      </Container>
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
const Container = styled("div")``;

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

const StudentList = styled("ul")`
  list-style: none;
`;
const StudentItem = styled("li")`
  margin: 20px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 17px;
    color: #547cb1;
  }
`;

const StyledHeader = styled("div")`
  margin: 20px 50px;
  min-height: 70px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 2rem;

  display: flex;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 18px;
    color: #547cb1;
  }
`;

const StyledTitle = styled("h2")`
  color: #547cb1;
  font-size: 25px;
  margin-top: 80px;
  margin-left: 50px;
`;
