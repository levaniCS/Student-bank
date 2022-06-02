// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import { generateId } from '../../../../../context/authContext';
import { AuthAndNavProps, RegisterDataProps, Goals } from '../../../../../utils/form.interfaces';
import { StyledButton } from '../../../../forms/formStyles';

const MainTab = ({ students, setActiveNav }: AuthAndNavProps) => {
  const { list } = students;

  const renderStudentList = () => list.map((i: RegisterDataProps , idx: number) => {
    return (
      <StyledCardWrapper key={idx}>
        <StudentItem>
          <p>{i.name}</p>
          <p>{i.surname}</p>
          <p>{i.email}</p>
        </StudentItem>


        {i.goals && (
          <>
            <h6>მიზნები</h6>
            <ol>
              {i.goals.map((g: Goals) => (
                  <li key={generateId()}>
                    <div>{g.title}</div>
                    <div>{g.description}</div>
                  </li>
              ))}
            </ol>
          </>
        )}
      </StyledCardWrapper>
    )
  })

  return (
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



      {/* სია */}
      {list.length > 0 && (
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
        {list.length > 0 ? renderStudentList() : (
            <>
              <BalanceTitle style={{ fontSize: 18, marginTop: 50 }}>თქვენ არ დაგიმატებიათ მოსწავლის ანგარიში</BalanceTitle>
              <StyledButton style={{ width: 400 }} onClick={() => setActiveNav('student')}>დაამატეთ აქიდან</StyledButton>
            </>
          )}
      </StudentList>
    </Container>
  )
}

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

`
const StudentItem = styled("li")`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledCardWrapper = styled('div')`
  margin: 20px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 2rem;

  p, li p {
    font-size: 17px;
    color: #547cb1; 
  }

  h6 {
    padding: 1rem 8rem;
    margin-top: 10px;
  }

  ol {
    padding: 0rem 9rem;
  }

  div {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 15px;
    color: #65b9ce; 
  }

`

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
`

const StyledTitle = styled("h2")`
  color: #547cb1; 
  font-size: 25px;
  margin-top: 80px;
  margin-left: 50px;
`

export default MainTab
