import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutComponent>
      <AboutSection>
        <img style={{ height: "600px" }} src="/images/about.png" alt="" />
        <Main>
          <Title>რატომ ჩვენი ბანკი? </Title>
          <P>
          სპეციალურად მოსწავლეებისთვის შექმნილი მობილური ბანკი მფლობელებს ეხმარება თავიანთი და ბავშვების ანგარიშების მართვაში. აპლიკაციის პრიორიტეტს მომხმარებლებისთვის კომფორტული გარემოს შექმა წარმოადგენს, შესაბამისად ხელმისაწვდომია როგორც ვებ ასევე მობილურის ვერსიაც.
          <br />
          <br />

          მნიშვნელოვანია, რომ ბავშვებს ადრეული ასაკიდანვე ვასწავლოთ ციფრულ სამყაროსთან ურთიერთობა და განვუვითაროთ ის უნარ-ჩვევები, რომლებიც შემდეგში დამოუკიდებლად ცხოვრებას გაუადვილებენ.

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
