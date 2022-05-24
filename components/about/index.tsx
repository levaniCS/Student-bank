import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutComponent>
      <AboutSection>
        <img style={{ height: "600px" }} src="/images/about.png" alt="" />
        <Main>
          <Title>ჩვენ ვართ არწივის შთამომავლები</Title>
          <P>
            არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
            მაგრამ ვეღარა დგებოდა, ცალს მხარს მიწაზე მიითრევს, გულისპირს სისხლი
            სცხებოდა. ვაჰ, დედას თქვენსა, ყოვებო, ცუდ დროს ჩაგიგდავთ ხელადა,
            თორო ვნახავდი თქვენს ბუმბულს გაშლილს, გაფანტულს ველადა!
          </P>
        </Main>
      </AboutSection>
    </AboutComponent>
  );
};

export default AboutUs;
const AboutComponent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15rem;
`;
const AboutSection = styled("div")`
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
  margin-left: 5rem;
`;

const Title = styled("h1")`
  font-size: 50px;
  color: #000000bf;
`;

const P = styled("h1")`
  font-size: 18px;
  color: #545454bf;
`;
