import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../../../common/FlexContainer";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "8px",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  border: "none",
};

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

interface Wallet {
  balance?: any;
  user?: any;
  students?: any;
  goals?: any;
}

const Wallet = (props: Wallet) => {
  const data = [
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
          data: [134, 300, 190, 550, 400, 170, props.balance.balancePending],
          borderColor: "#F82E2E",
          backgroundColor: "#f82e2ee3",
        },
      ],
    },
  ];
  const [showForm, setShowForm] = useState(false);
  const [activeStat, setActiveStat] = useState(0);
  const [open, setOpen] = useState(false);
  const [usdInputVal, setUsdInputVal] = useState("");
  const [euroInputVal, setEuroInputVal] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [inputVal1, setInputVal1] = useState("");
  const [inputVal2, setInputVal2] = useState("");
  const [val3, setVal3] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(props.students.list);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            თანხის გადარიცხვა შვილზე (ლარებში)
          </Typography>

          <FlexContainer
            style={{ gap: "1rem", marginTop: "1rem", flexDirection: "column" }}
          >
            <ChildItem>
              <Title1
                style={{
                  fontSize: "1rem",
                  color: "#1E2029",
                  width: "230px",
                }}
              >
                🖐️{props?.students?.list[0]?.name}
              </Title1>
              <Input
                value={inputVal}
                placeholder="რაოდენობა"
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button
                onClick={() => {
                  props.balance.changeBalance(parseInt(inputVal), "dec");
                  props.balance.changePandingBalance(parseInt(inputVal));
                  handleClose();
                  setInputVal("");
                }}
                style={{
                  background: "#73FFBC",
                  border: "none",
                  borderRadius: "8px",
                  padding: "5px",
                }}
              >
                გადარიცხვა
              </button>
            </ChildItem>
            <ChildItem>
              <Title1
                style={{
                  fontSize: "1rem",
                  color: "#1E2029",
                  width: "230px",
                }}
              >
                🖐️{props?.students?.list[1]?.name}
              </Title1>
              <Input
                value={inputVal1}
                placeholder="რაოდენობა"
                onChange={(e) => setInputVal1(e.target.value)}
              />
              <button
                onClick={() => {
                  props.balance.changeBalance(parseInt(inputVal1), "dec");
                  props.balance.changePandingBalance(parseInt(inputVal1));
                  handleClose();
                  setInputVal1("");
                }}
                style={{
                  background: "#73FFBC",
                  border: "none",
                  borderRadius: "8px",
                  padding: "5px",
                }}
              >
                გადარიცხვა
              </button>
            </ChildItem>

            {/* <button
              style={{
                background: "#F82E2E",
                border: "none",
                borderRadius: "8px",
                padding: "5px",
                color: "white",
                marginTop: "2rem",
              }}
            >
              გაუქმება
            </button> */}
          </FlexContainer>
        </Box>
      </Modal>
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
                  <Title1>2.456 ლარი</Title1>
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
                  <Title1>{props.balance.balancePending} ლარი</Title1>
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

              {props.goals.goals.map((item: any, i: number) => (
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
                      {item.title}
                    </Title1>
                    <Title1
                      style={{
                        fontSize: "0.7rem",
                        color: "#1E2029",
                      }}
                    >
                      {item.time}
                    </Title1>
                  </FlexContainer>
                  <Title1>{item.price} ლარი </Title1>
                  <Title1
                    style={{
                      fontSize: "0.8rem",
                      color: "white",
                      background: !item.status ? "#9664FF" : "#73FFBC",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "12px",
                    }}
                    onClick={() => {
                      if (!item.status) {
                        props.balance.changeBalance(item.price, "dec");
                        props.balance.changePandingBalance(item.price);
                        props.goals.changeGoals(i + 1);
                      }
                    }}
                  >
                    {!item.status ? "გადახდა" : "გადახდილი"}
                  </Title1>
                </MonthPaymentsItem>
              ))}
            </MonthPayments>
          </OverWiev>
          <CardSection>
            <FlexContainer
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Title1>შენი ბარათი</Title1>
              <FlexContainer>
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
            </FlexContainer>
            <MyCard>
              <Card src="/images/card.png" alt="" />
            </MyCard>
            <CardInfo>
              <FlexContainer
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
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
            <Wallets>
              <Title1
                style={{
                  fontSize: "12px",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "rgb(108 71 201)",
                }}
              >
                თანხის კონვერტირება
              </Title1>
              <Title1
                style={{
                  fontSize: "12px",
                  color: "black",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                ვალუტის შეძენა შესაძლებელია მხოლოდ ლარის ანგარიშიდან!
              </Title1>
              <FlexContainer
                style={{
                  justifyContent: "space-between",
                  padding: "1rem 3rem",
                }}
              >
                <Title1
                  style={{
                    fontSize: "20px",
                    color: "black",
                    borderRadius: "8px",
                  }}
                >
                  {props.balance.balance.toFixed(2)} ლარი
                </Title1>
                <Title1
                  style={{
                    fontSize: "20px",
                    color: "black",
                    borderRadius: "8px",
                  }}
                >
                  {(props.balance.balance / 3).toFixed(2)} $
                </Title1>
                <Title1
                  style={{
                    fontSize: "20px",
                    color: "black",
                    borderRadius: "8px",
                  }}
                >
                  {(props.balance.balance / 3.4).toFixed(2)} EU
                </Title1>
              </FlexContainer>
              <FlexContainer
                style={{
                  gap: "10px",
                }}
              >
                <Dolar>
                  <Input
                    value={usdInputVal}
                    placeholder="Usd რაოდენობა"
                    onChange={(e) => setUsdInputVal(e.target.value)}
                  />
                  <Buy
                    onClick={() => {
                      props.balance.byUSD(parseInt(usdInputVal));
                      setUsdInputVal("");
                    }}
                  >
                    გადაცვლა
                  </Buy>
                </Dolar>
                <Euro>
                  <Input
                    value={euroInputVal}
                    placeholder="Euro რაოდენობა"
                    onChange={(e) => setEuroInputVal(e.target.value)}
                  />
                  <Buy
                    onClick={() => {
                      props.balance.byEURO(parseInt(euroInputVal));
                      setEuroInputVal("");
                    }}
                  >
                    გადაცვლა
                  </Buy>
                </Euro>
                <GBP>
                  <Input placeholder="GBP რაოდენობა" />
                  <Buy>გადაცვლა</Buy>
                </GBP>
              </FlexContainer>
            </Wallets>
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
              <FlexContainer style={{ gap: "3rem" }}>
                <Title1
                  style={{
                    fontSize: "36px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {props.balance.balance.toFixed(2)} ლარი
                </Title1>
                {props.balance.balanceUSD > 0 && (
                  <Title1
                    style={{
                      fontSize: "36px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    {props.balance.balanceUSD} $
                  </Title1>
                )}
                {props.balance.balanceEURO > 0 && (
                  <Title1
                    style={{
                      fontSize: "36px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    {props.balance.balanceEURO} EU
                  </Title1>
                )}
              </FlexContainer>
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
              style={{
                gap: "1rem",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <BlackButton
                onClick={() => {
                  if (props.students.list.length > 0) {
                    handleOpen();
                  }
                }}
              >
                გაგზავნა
              </BlackButton>
              <BlackButton>მიღება</BlackButton>
            </FlexContainer>

            <QuickTransfer>
              <Title1
                style={{
                  fontSize: "14px",
                  padding: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                სწრაფი ტრანსფერი
              </Title1>

              <FlexContainer
                style={{
                  width: "70%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "10px 20px",
                  borderRadius: "12px",
                }}
              >
                <img src="/images/user.png" alt="" />
                <img src="/images/use1.png" alt="" />
                <img src="/images/user2.png" alt="" />
                <img src="/images/user3.png" alt="" />
                <img src="/images/add.png" alt="" />
              </FlexContainer>
            </QuickTransfer>
            <Notification>
              <Title1
                style={{
                  fontSize: "16px",
                  padding: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                შეტყობინებების პანელი
              </Title1>
              <NotificationItem>
                <FlexContainer style={{ width: "300px" }}>
                  <img src="/images/use1.png" alt="" />
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    გადმოგირიცხათ თანხა
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    backgroundColor: "#73FFBC",
                    borderRadius: "5px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    $20
                  </Title1>
                </FlexContainer>
                <img width={40} src="/icons/invoice.svg" alt="" />
              </NotificationItem>
              <NotificationItem>
                <FlexContainer style={{ width: "300px" }}>
                  <img src="/images/use1.png" alt="" />
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    გადახდა, ობიექტი NABIJI
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    backgroundColor: "#73FFBC",
                    borderRadius: "5px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    $2
                  </Title1>
                </FlexContainer>
                <img width={40} src="/icons/invoice.svg" alt="" />
              </NotificationItem>
              <NotificationItem>
                <FlexContainer style={{ width: "300px" }}>
                  <img src="/images/user2.png" alt="" />
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    გადმოგირიცხათ თანხა
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    backgroundColor: "#73FFBC",
                    borderRadius: "5px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    $23
                  </Title1>
                </FlexContainer>
                <img width={40} src="/icons/invoice.svg" alt="" />
              </NotificationItem>
              <NotificationItem>
                <FlexContainer style={{ width: "300px" }}>
                  <img src="/images/use1.png" alt="" />
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    კომუნალური დენიზი
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    backgroundColor: "#FF7373",
                    borderRadius: "5px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    $50
                  </Title1>
                </FlexContainer>
                <img width={40} src="/icons/invoice.svg" alt="" />
              </NotificationItem>
              <NotificationItem>
                <FlexContainer style={{ width: "300px" }}>
                  <img src="/images/user3.png" alt="" />
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    გადახდა: SPAR GEORGIA
                  </Title1>
                </FlexContainer>
                <FlexContainer
                  style={{
                    backgroundColor: "#FF7373",
                    borderRadius: "5px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  <Title1
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    $10
                  </Title1>
                </FlexContainer>
                <img width={40} src="/icons/invoice.svg" alt="" />
              </NotificationItem>
            </Notification>
          </Students>
        </WalletInner>
      </WalletWrapper>
    </>
  );
};

export default Wallet;

const WalletWrapper = styled("div")`
  width: 100%;
  height: 100%;
  /* background-image: url("/images/back.png"); */
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
  height:90vh;
  /* margin: 20px 50px; */
`;
const CardSection = styled("div")`
  width: 30%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 90vh;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  border-left: 1px solid rgba(99, 99, 99, 0.2);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 90vh;
  /* background-color: red; */
  /* margin: 20px 50px; */
`;

const Income = styled("div")`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;
  width: 49%;
  borde-radius: 12px;
  padding: 10px 0;
  display: flex;
  gap: 20px;
  border-radius: 12px;
`;
const Spending = styled("div")`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;

  margin-top: -0.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;
const MonthPaymentsItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`;
const Card = styled("img")`
  width: 350px;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const BalanceCont = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
`;
const QuickTransfer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 15px;
`;
const BlackButton = styled("div")`
  background-color: #1e2029;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  width: 20%;
  display: flex;
  padding: 15px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const Notification = styled("div")`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 2rem;
  gap: 10px;
  height: fit-content;
  border-radius: 8px;
  padding: 15px;
`;
const NotificationItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wallets = styled("div")`
  display: flex;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  margin-top: 3rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;
`;

const Dolar = styled("div")``;
const Input = styled("input")`
  border: none;
  outline: none;
  background: #80808014;
  padding: 10px 5px;

  border-radius: 5px;
  font-size: 12px;
  width: 100%;
`;

const Buy = styled("div")`
  background: red;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 8px;
  font-size: 12px;
  background: rgb(115, 255, 188);
  font-weight: bold;
`;
const Euro = styled("div")``;
const GBP = styled("div")``;
const ChildItem = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;
