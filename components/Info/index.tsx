import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <InfoComponent>
      <InfoSection>
        <Main>
          <Title>მობილური ბანკი მოსწავლეებისთვის</Title>
          <P>
          ჩვენ გთავაზობთ სრულფასოვან ონლაინ ბანკს, რომელიც შექმნილია სპეციალურად მშობლებისა და მოსწავლეებისთვის.
          </P>
          <Button>
            <Link href={"/auth"}>დაწყება</Link>
          </Button>
        </Main>
        <img src="/images/banner.png" alt="" />
      </InfoSection>
    </InfoComponent>
  );
};

export default Info;
const InfoComponent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const InfoSection = styled("div")`
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const Main = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;

const Button = styled("div")`
  color: white;
  width: 250px;
  text-align: center;
  padding: 10px 15px;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  color: #fff;
  margin: 10px;
  background-size: 300% 300%;
  color: white;
  font-size: 1.4rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    to right,
    #895cf2 0%,
    #ffabf4 50%,
    #895cf2 100%
  );
  transition: 0.5s;
  margin-top: 2rem;
  &:hover {
    background-position: right center;
  }
`;

const Title = styled("h1")`
  font-size: 50px;
  color: #000000bf;
`;

const P = styled("h1")`
  font-size: 18px;
  color: #545454bf;
`;
