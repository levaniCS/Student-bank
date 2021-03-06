import styled from "styled-components";
import { AuthDataProps } from "../../../../utils/form.interfaces";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import StudentsList from "../../../studentsList";
import GoalsList from "../../../goalsList";
ChartJS.register(BarElement, CategoryScale, LinearScale);

const MainSection = (props: AuthDataProps) => {
  const list = props.students;
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const testDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).replace('June', 'ივნისი')
    .replace('July', 'ივლისი')

  return (
    <MainSectionComponent>
      <MainInner>
        <MainContainer>
          <Header>
            <Title>მთავარი</Title>
            <Profile>
              <img style={{ width: "30px" }} src="/icons/search.svg" alt="" />
              <ProfilePhoto src="/images/user2.png" alt="" />
              <StyledBalance>{props.balance.balance} ლარი</StyledBalance>
            </Profile>
          </Header>
        </MainContainer>
        <Container>
          <LeftContainer>
            {" "}
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
                      {props.balance.balance} ლარი
                    </BalanceTitle>
                    <BalanceTitle
                      style={{ fontSize: "14px", color: "#61BB84" }}
                    >
                      $ {(props.balance.balance / 3).toFixed(2)}
                    </BalanceTitle>
                  </div>
                </div>
              </Balance>
            </MyCard>
            <Currencies>
              <BalanceTitle>დოლარის კურსი $</BalanceTitle>
              <img width={"100%"} src="/images/usd.png" alt="" />
            </Currencies>
            <QuickTransfer>
              <H1>სწრაფი გადარიცხვა</H1>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  border: "1px solid #F6F8FB",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/icons/mastercard.svg" alt="" />
                  <BalanceTitle style={{ fontSize: "14px" }}>GGB</BalanceTitle>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "right",
                  }}
                >
                  <BalanceTitle style={{ fontSize: "24px" }}>
                    {props.balance.balance} ლარი
                  </BalanceTitle>
                </div>
              </div>
              <Emaunt>
                <h1
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "14px",
                    color: "#A8B1BF",
                  }}
                >
                  რაოდენობა
                </h1>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Input type="text" placeholder="თანხა" />
                  <img
                    style={{ width: "25px" }}
                    src="/icons/recieve.svg"
                    alt=""
                  />
                </div>
              </Emaunt>
              <IconsSections>
                <IconsItemDiv>
                  <IconsItem>
                    <img
                      style={{ width: "25px" }}
                      src="/icons/send.svg"
                      alt=""
                    />
                  </IconsItem>
                  <h1
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                      color: "#A8B1BF",
                    }}
                  >
                    გაგზავნა
                  </h1>
                </IconsItemDiv>
                <IconsItemDiv>
                  <IconsItem>
                    <img
                      style={{ width: "25px" }}
                      src="/icons/recieve.svg"
                      alt=""
                    />
                  </IconsItem>
                  <h1
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                      color: "#A8B1BF",
                    }}
                  >
                    მიღება
                  </h1>
                </IconsItemDiv>
                <IconsItemDiv>
                  <IconsItem>
                    <img
                      style={{ width: "25px" }}
                      src="/icons/invoicing.svg"
                      alt=""
                    />
                  </IconsItem>
                  <h1
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                      color: "#A8B1BF",
                    }}
                  >
                    ინვოისი
                  </h1>
                </IconsItemDiv>
                <IconsItemDiv>
                  <IconsItem>
                    <img
                      style={{ width: "25px" }}
                      src="/icons/more.svg"
                      alt=""
                    />
                  </IconsItem>
                  <h1
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                      color: "#A8B1BF",
                    }}
                  >
                    სხვა
                  </h1>
                </IconsItemDiv>
              </IconsSections>
            </QuickTransfer>
          </LeftContainer>
          <RigthContainer>
            <RightContainerHeader>
              <MainStat>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h1
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "18px",
                      color: "#141736",
                      marginBottom: "1rem",
                    }}
                  >
                    ბოლო კვირის სტატისტიკა
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <h1
                      style={{
                        padding: 0,
                        margin: 0,
                        fontSize: "12px",
                        color: "#A789FF",
                        marginBottom: "1rem",
                      }}
                    >
                      გასავალი
                    </h1>
                    <h1
                      style={{
                        padding: 0,
                        margin: 0,
                        fontSize: "12px",
                        color: "#83DEA4",
                        marginBottom: "1rem",
                      }}
                    >
                      შემოსავალი
                    </h1>
                  </div>
                </div>
                <Bar
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                        labels: {
                          color: "rgb(255, 99, 132)",
                        },
                      },
                      title: {
                        display: false,
                        text: "Chart.js Bar Chart",
                      },
                    },
                  }}
                  style={{ width: "600px" }}
                  data={{
                    labels: [
                      "3 ივნისი",
                      "4 ივნისი",
                      "5 ივნისი",
                      "6 ივნისი",
                      "7 ივნისი",
                      "8 ივნისი",
                      "9 ივნისი",
                    ],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [120, 190, 33, 50, 20, 30, 70],
                        backgroundColor: ["rgb(167, 137, 255)"],
                        borderColor: ["#A789FF"],
                        borderWidth: 1,
                      },
                      {
                        label: "# of Votes",
                        data: [200, 10, 80, 55, 70, 60, 130],
                        backgroundColor: ["rgb(131, 222, 164,0.6)"],
                        borderColor: ["#83DEA4"],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </MainStat>
              <StudentsList {...props} />
            </RightContainerHeader>
            <Trasnsactions>
              <TransactionHeader>
                <h1
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "12px",
                    color: "#A8B1BF",
                  }}
                >
                  უახლოესი ტრანზაქციები
                </h1>
                <h1
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "12px",
                    color: "#A8B1BF",
                  }}
                >
                  ყველას ნახვა
                </h1>
              </TransactionHeader>
              <TrasnsactionsMain>
                <TrasnsactionItem>
                  <div
                    style={{
                      width: "220px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/images/bitcoin.png" alt="" />
                    <TrasnsactionDetails>
                      გადარიცხვა ბიტკოინზე
                    </TrasnsactionDetails>
                  </div>
                  <TrasnsactionDetails>ივნისი 12, 2022, 12:43</TrasnsactionDetails>
                  <TrasnsactionDetails>*****342323</TrasnsactionDetails>
                  <TrasnsactionDetails>- 800 ლარი</TrasnsactionDetails>
                  <AStatus>წარმატებული</AStatus>
                </TrasnsactionItem>
                <TrasnsactionItem>
                  <div
                    style={{
                      width: "220px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/images/girl.png" alt="" />
                    <TrasnsactionDetails>შვილზე გადარიცხვა</TrasnsactionDetails>
                  </div>
                  <TrasnsactionDetails>ივნისი 2, 2022, 15:12</TrasnsactionDetails>
                  <TrasnsactionDetails>*****342323</TrasnsactionDetails>
                  <TrasnsactionDetails>- 100 ლარი</TrasnsactionDetails>
                  <AStatus>წარმატებული</AStatus>
                </TrasnsactionItem>
                <TrasnsactionItem>
                  <div
                    style={{
                      width: "220px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/images/pay.png" alt="" />
                    <TrasnsactionDetails>გარეშე გადარიცხვა</TrasnsactionDetails>
                  </div>
                  <TrasnsactionDetails>ივნისი 12, 2022, 11:56</TrasnsactionDetails>
                  <TrasnsactionDetails>*****342323</TrasnsactionDetails>
                  <TrasnsactionDetails>- 800 ლარი</TrasnsactionDetails>
                  <AStatus>წარმატებული</AStatus>
                </TrasnsactionItem>
                {props?.balance?.transactionsHistory?.length > 0 && (
                  props?.balance?.transactionsHistory.map((tr, i) => {

                    const isPrentToChild = tr.from === 'Parent'
                    return (
                      <TrasnsactionItem key={i}>
                      <div
                        style={{
                          width: "220px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img width="30" src={`/images/${isPrentToChild? 'tra' : 'profits'}.png`} alt="" />
                        <TrasnsactionDetails>{isPrentToChild ? 'მშობლიდან შვილზე გადარიცხვა' : 'ანგარიშის შევსება'}</TrasnsactionDetails>
                      </div>
                      <TrasnsactionDetails>{i.date ? i.date : testDate}</TrasnsactionDetails>
                      <TrasnsactionDetails>{i.cardNumber ? i.cardNumber : '*****342323'}</TrasnsactionDetails>
                      <TrasnsactionDetails>{isPrentToChild ? '- ' : '+ '} {tr.amount} ლარი</TrasnsactionDetails>
                      <AStatus>წარმატებული</AStatus>
                    </TrasnsactionItem>
                    )
                  })
                  )
                }
              </TrasnsactionsMain>
            </Trasnsactions>
            <GoalsList {...props} />
          </RigthContainer>
        </Container>
      </MainInner>
    </MainSectionComponent>
  );
};

export default MainSection;

const MainSectionComponent = styled("div")`
  width: 100%;
  height: 100%;
  /* margin: 1rem; */
  background-size: cover;
`;
const MainContainer = styled("div")`
  width: 100%;
`;
const MainInner = styled("div")`
  width: 100%;
  height: 100%;
  padding: 1rem;
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
const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 96%;
  gap: 1rem;
`;
const QuickTransfer = styled("div")`
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
`;
const Emaunt = styled("div")`
  border-radius: 10px;
  border: 2px solid #819cfd;
  padding: 10px;
`;

const Input = styled("input")`
  border: none;
  outline: none;
  background-color: #0000000a;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  width: 90%;
`;

const IconsSections = styled("div")`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const IconsItemDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const IconsItem = styled("div")`
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 10px;
`;
const LeftContainer = styled("div")`
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98%;
  border-radius: 10px;
  padding: 20px;
  background: #ffffff36;
`;

const RigthContainer = styled("div")`
  padding: 1.8rem 2rem;
  width: 100%;
  background: #ffffff36;
  height: 98%;
  border-radius: 10px;
  padding: 20px;
`;
const RightContainerHeader = styled("div")`
  display: flex;
  gap: 2rem;
  border-radius: 13px;
`;
const Trasnsactions = styled("div")`
  width: 100%;
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
`;
const TransactionHeader = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const TrasnsactionsMain = styled("div")`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
const TrasnsactionItem = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const TrasnsactionDetails = styled("h1")`
  font-size: 12px;
`;

const H1 = styled("h1")`
  font-size: 16px;
  color: #141736;
`;
const AStatus = styled("div")`
  font-size: 16px;
  color: #61bb84;
  background: #ebfff3;
  padding: 10px;
  border-radius: 10px;
`;
const BStatus = styled("div")`
  font-size: 16px;
  color: #141736;
`;
const Card = styled("img")`
  width: 120%;
  margin-left: -29px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const MyCard = styled("div")`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 100%;
`;

const Balance = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  background: white;
`;

const BalanceTitle = styled("h1")`
  font-size: 14px;
  text-align: center;
  color: #798ba3;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const StudentList = styled("ul")`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  /* background-color: red; */
  justify-content: center;
  /* margin-top: 3rem; */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
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

const MainStat = styled("div")`
  /* background: red; */
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  width: 50%;
  background: white;
`;

const Currencies = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  padding: 1rem;
  border-radius: 1rem;
  background: white;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledBalance = styled("p")`
  font-size: 20px;
  transform: translateY(20%);
  color: #798ba3;
  font-weight: bold;
`