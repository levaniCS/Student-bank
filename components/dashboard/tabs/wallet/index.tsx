import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../../../common/FlexContainer";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};
export const data = [
  {
    labels,
    datasets: [
      {
        data: [344, 50, 90, 155, 70, 10, 190],
        borderColor: "#9664FF",
        backgroundColor: "#8842b3",
      },
    ],
  },
  {
    labels,
    datasets: [
      {
        data: [144, 30, 190, 55, 40, 10, 90],
        borderColor: "#F82E2E",
        backgroundColor: "#f82e2ee3",
      },
    ],
  },
];

interface Wallet {
  balance?: any;
  user?: any;
  students?: any;
}

const Wallet = (props: Wallet) => {
  const [showForm, setShowForm] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

  return (
    <WalletWrapper>
      <WalletInner>
        <OverWiev>
          <Title1>საფულე</Title1>
          <Title1
            style={{ fontSize: "1rem", marginTop: "15px", color: "#1E2029" }}
          >
            დილამშვიდობისა გიორგი! 🖐️
          </Title1>
          <FlexContainer
            style={{
              gap: "15px",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <Income>
              <img src="/icons/left-income.svg" alt="" />
              <FlexContainer style={{ flexDirection: "column", gap: "12px" }}>
                <Title1
                  style={{
                    fontSize: "1rem",
                    marginTop: "15px",
                    color: "rgb(108 109 114)",
                  }}
                >
                  შემოსავალი
                </Title1>
                <Title1>$23.000</Title1>
                <FlexContainer style={{ alignItems: "center", gap: "12px" }}>
                  <img src="/icons/stat-up.svg" alt="" />
                  <Title1
                    style={{
                      padding: "0",
                      fontSize: "0.9rem",
                      color: "#1E2029",
                    }}
                  >
                    12%
                  </Title1>
                </FlexContainer>
              </FlexContainer>
            </Income>
            <Spending>
              <img src="/icons/left-pending.svg" alt="" />
              <FlexContainer style={{ flexDirection: "column", gap: "12px" }}>
                <Title1
                  style={{
                    fontSize: "1rem",
                    marginTop: "15px",
                    color: "rgb(108 109 114)",
                  }}
                >
                  გასავალი
                </Title1>
                <Title1>$21.000</Title1>
                <FlexContainer style={{ alignItems: "center", gap: "12px" }}>
                  <img src="/icons/stat-up.svg" alt="" />
                  <Title1
                    style={{
                      padding: "0",
                      fontSize: "0.9rem",
                      color: "#1E2029",
                    }}
                  >
                    8%
                  </Title1>
                </FlexContainer>
              </FlexContainer>
            </Spending>
          </FlexContainer>
          <FlexContainer
            style={{
              marginTop: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title1>თვის სტატისტიკა</Title1>
            <SwitchButton>
              <Title1
                style={{
                  fontSize: "0.8rem",
                  color: activeStat === 0 ? "white" : "black",
                  background: activeStat === 0 ? "#9664FF" : "white",
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                onClick={() => setActiveStat(0)}
              >
                შემოსავალი
              </Title1>
              <Title1
                style={{
                  fontSize: "0.8rem",
                  background: activeStat === 1 ? "#F82E2E" : "white",
                  padding: "10px",
                  borderRadius: "12px",
                  color: activeStat === 1 ? "white" : "black",
                  cursor: "pointer",
                }}
                onClick={() => setActiveStat(1)}
              >
                გასავალი
              </Title1>
            </SwitchButton>
          </FlexContainer>
          <WalletStats>
            <Line options={options} data={data[activeStat]} />
          </WalletStats>
          <MonthPayments>
            <MonthPaymentsItem>
              <Title1>თვის მიზნები</Title1>
              <Add>
                <img src="/icons/plus.svg" alt="" />
              </Add>
            </MonthPaymentsItem>

            <MonthPaymentsItem>
              <img src="/icons/electro.svg" alt="" />
              <FlexContainer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Title1
                  style={{
                    fontSize: "0.8rem",
                    color: "black",
                  }}
                >
                  ელექტრო გადასახადი
                </Title1>
                <Title1
                  style={{
                    fontSize: "0.7rem",
                    color: "#1E2029",
                  }}
                >
                  შეტანის ბოლო დღე 12 ივლისი
                </Title1>
              </FlexContainer>
              <Title1>$40</Title1>
              <Title1
                style={{
                  fontSize: "0.8rem",
                  color: "white",
                  background: "#9664FF",
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                // onClick={() => setActiveStat(0)}
              >
                გადახდა
              </Title1>
            </MonthPaymentsItem>
            <MonthPaymentsItem>
              <img src="/icons/internet.svg" alt="" />
              <FlexContainer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Title1
                  style={{
                    fontSize: "0.8rem",
                    color: "black",
                  }}
                >
                  ინტერნეტის გადასახადი
                </Title1>
                <Title1
                  style={{
                    fontSize: "0.7rem",
                    color: "#1E2029",
                  }}
                >
                  შეტანის ბოლო დღე 18 ივლისი
                </Title1>
              </FlexContainer>
              <Title1>$20</Title1>
              <Title1
                style={{
                  fontSize: "0.8rem",
                  color: "white",
                  background: "#9664FF",
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                // onClick={() => setActiveStat(0)}
              >
                გადახდა
              </Title1>
            </MonthPaymentsItem>
            <MonthPaymentsItem>
              <img src="/icons/electro.svg" alt="" />
              <FlexContainer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Title1
                  style={{
                    fontSize: "0.8rem",
                    color: "black",
                  }}
                >
                  წყლის გადასახადი
                </Title1>
                <Title1
                  style={{
                    fontSize: "0.7rem",
                    color: "#1E2029",
                  }}
                >
                  შეტანის ბოლო დღე 20 ივლისი
                </Title1>
              </FlexContainer>
              <Title1>$35</Title1>
              <Title1
                style={{
                  fontSize: "0.8rem",
                  color: "white",
                  background: "#9664FF",
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                // onClick={() => setActiveStat(0)}
              >
                გადახდა
              </Title1>
            </MonthPaymentsItem>
          </MonthPayments>
        </OverWiev>
        <CardSection>
          <FlexContainer
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Title1>შენი ბარათი</Title1>
            <Title1
              style={{
                fontSize: "12px",
                color: "black",
                padding: "10px",
                borderRadius: "12px",
                cursor: "pointer",
                border: "1px solid black",
              }}
            >
              ახლის შეკვეთა
            </Title1>
          </FlexContainer>
          <MyCard>
            <Card src="/images/card.png" alt="" />
          </MyCard>
          <CardInfo>
            <FlexContainer
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Title1>ბარათის ინფორმაცია</Title1>
              <img
                onCanPlay={() => {}}
                style={{ cursor: "pointer" }}
                src="/icons/eye-line.svg"
                alt=""
              />
            </FlexContainer>
            <CardInfoCont>
              <FlexContainer
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <FlexContainer
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "48%",
                  }}
                >
                  <Title1
                    style={{
                      color: "gray",
                      fontSize: "0.8rem",
                    }}
                  >
                    Card Name
                  </Title1>
                  <Title1
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    Giorgi Keburia
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "48%",
                  }}
                >
                  <Title1
                    style={{
                      color: "gray",
                      fontSize: "0.8rem",
                    }}
                  >
                    Card No
                  </Title1>
                  <Title1
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    **** **** **** 1890
                  </Title1>
                </FlexContainer>
              </FlexContainer>
              <FlexContainer
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <FlexContainer
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "48",
                  }}
                >
                  <Title1
                    style={{
                      color: "gray",
                      fontSize: "0.8rem",
                    }}
                  >
                    CVV
                  </Title1>
                  <Title1
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    ***
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "48%",
                  }}
                >
                  <Title1
                    style={{
                      color: "gray",
                      fontSize: "0.8rem",
                    }}
                  >
                    Valid Untill
                  </Title1>
                  <Title1
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    05/23
                  </Title1>
                </FlexContainer>
              </FlexContainer>
            </CardInfoCont>
          </CardInfo>
        </CardSection>
        <Students>
          <Profile>
            <FlexContainer>
              <img src="/images/user.png" alt="" />
              <FlexContainer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem",
                  gap: "5px",
                }}
              >
                <Title1
                  style={{
                    fontSize: "14px",
                    padding: "0",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  გიორგი ქებურია
                </Title1>

                <Title1
                  style={{
                    fontSize: "12px",
                    padding: "0",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  Giorgikeburia1@gmail.com
                </Title1>
              </FlexContainer>
            </FlexContainer>
            <img src="/icons/dropDown.svg" alt="" />
          </Profile>
          <BalanceCont>
            <Title1
              style={{
                fontSize: "18px",
                color: "black",
                cursor: "pointer",
              }}
            >
              ბალანსი
            </Title1>
            <Title1
              style={{
                fontSize: "36px",
                color: "black",
                cursor: "pointer",
              }}
            >
              $32 000
            </Title1>
            <FlexContainer style={{ alignItems: "center", gap: "12px" }}>
              <img src="/icons/stat-up.svg" alt="" />
              <Title1
                style={{
                  padding: "0",
                  fontSize: "0.9rem",
                  color: "#1E2029",
                }}
              >
                12%
              </Title1>
            </FlexContainer>
          </BalanceCont>
          <FlexContainer
            style={{ gap: "1rem", justifyContent: "center", marginTop: "1rem" }}
          >
            <BlackButton>Send</BlackButton>
            <BlackButton>Receive</BlackButton>
          </FlexContainer>
        </Students>
      </WalletInner>
    </WalletWrapper>
  );
};

export default Wallet;

const WalletWrapper = styled("div")`
  width: 100%;
  height: 100%;
  background-image: url("/images/back.png");
  background-size: cover;
`;
const WalletInner = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  gap: 10px;
`;
const OverWiev = styled("div")`
  width: 32%;
  max-width:32%
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff36;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  /* margin: 20px 50px; */
`;
const CardSection = styled("div")`
  width: 30%;
  /* background-color: red; */
  /* margin: 20px 50px; */
`;
const CardInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 88%;
`;
const CardInfoCont = styled("div")`
  background: white;

  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 2;
  gap: 1rem;
`;
const Students = styled("div")`
  width: 35%;
  padding: 0 3rem;
  margin-left: 2rem;
  /* background-color: red; */
  /* margin: 20px 50px; */
`;

const Income = styled("div")`
  background: white;
  width: 49%;
  borde-radius: 12px;
  padding: 10px 0;
  display: flex;
  gap: 20px;
  border-radius: 12px;
`;
const Spending = styled("div")`
  background: white;
  width: 49%;
  borde-radius: 12px;
  padding: 10px 0;
  display: flex;
  gap: 20px;
  border-radius: 12px;
`;
const WalletStats = styled("div")`
  background: white;
  margin-top: 1rem;
  border-radius: 12px;
  padding: 10px;
`;
const MonthPayments = styled("div")`
  background: white;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 1rem;
`;
const MonthPaymentsItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`;
const Card = styled("img")`
  width: 100%;
  margin-left: -29px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
const Add = styled("div")`
  padding: 10px 15px;
  background-color: white;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

const MyCard = styled("div")`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 100%;
`;
const SwitchButton = styled("div")`
  background: white;
  padding: 5px;
  display: flex;
  gap: 10px;
  border-radius: 12px;
`;

const Balance = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  width: 100%;
  border-radius: 20px;
  padding: 15px;
`;
const BalanceTitle = styled("h1")`
  font-size: 14px;
  text-align: center;
  color: #798ba3;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
const Currencies = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  padding: 1rem;
  border-radius: 1rem;
`;
const Title1 = styled("h1")`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
const Profile = styled("div")`
  background: white;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const BalanceCont = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
`;
const BlackButton = styled("div")`
  background-color: #1e2029;
  border-radius: 8px;
  color: white;
  width: 20%;
  display: flex;
  padding: 15px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
