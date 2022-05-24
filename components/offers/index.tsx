import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Offers = () => {
  return (
    <OffersComponent>
      <OffersSection>
        <Title>ჩვენ გთავაზობთ სერვისებს:</Title>
        <Main>
          <Card>
            <LogoImg src="/images/secure.png" alt="" />
            <MiniTitle>დაცული გარემო</MiniTitle>
            <P>
              არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
            </P>
          </Card>
          <Card>
            <LogoImg src="/images/payment.png" alt="" />
            <MiniTitle>სწრაფი სერვისი</MiniTitle>
            <P>
              არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
            </P>
          </Card>
          <Card>
            <LogoImg src="/images/chart.png" alt="" />
            <MiniTitle>ზუსტი ანალიტიკა</MiniTitle>
            <P>
              არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
            </P>
          </Card>
          <Card>
            <LogoImg src="/images/loop.png" alt="" />
            <MiniTitle>მარტივი გარემო</MiniTitle>
            <P>
              არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
            </P>
          </Card>
        </Main>
      </OffersSection>
    </OffersComponent>
  );
};

export default Offers;
const OffersComponent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgb(218 234 253),
    rgb(247 192 240)
  );
  border-top-left-radius: 400px;
  border-bottom-right-radius: 400px;
  margin-top: 15rem;
`;
const OffersSection = styled("div")`
  width: 100%;
  margin-top: 50px;
  max-width: 1600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9rem;
  padding: 0 10rem 10rem;
`;
const Main = styled("div")`
  display: flex;
  gap: 2rem;
`;

const Card = styled("div")`
  background: white;
  padding: 20px;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  position: relative;
`;

const Title = styled("h1")`
  font-size: 50px;
  color: #000000bf;
`;
const MiniTitle = styled("h1")`
  font-size: 20px;
  color: #000000bf;
  margin-top: 2rem;
`;

const P = styled("h1")`
  font-size: 17px;
  color: #545454bf;
`;

const LogoImg = styled("img")`
  top: -30px;
  /* width: 100px; */
  position: absolute;
`;
