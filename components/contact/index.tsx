import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>
          <MiniTitle>დაგვიკავშირდით</MiniTitle>
          <P>
            არწივი ვნახე დაჭრილი, ყვავ-ყორნებს ეომებოდა, ეწადა ბეჩავს ადგომა,
          </P>
        </ContactTitle>
        <ContactDiv>
          <Email>
            <Img src="/icons/email.svg" alt="" />
            <MiniTitle>ელფოსტა</MiniTitle>
            <MiniTitle>contact@lemondo.ge</MiniTitle>
          </Email>
          <Phone>
            <Img src="/icons/phone.svg" alt="" />
            <MiniTitle>ტელეფონი</MiniTitle>
            <MiniTitle>+995 557 946 146</MiniTitle>
          </Phone>
        </ContactDiv>
      </ContactContainer>
    </ContactSection>
  );
};
export default Contact;

const ContactSection = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    rgb(218 234 253),
    rgb(247 192 240)
  );
  margin-bottom: 1px;
  padding: 3rem 0;
  margin-top: 15rem;
`;
const ContactContainer = styled("div")`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  text-align: center;
  gap: 5rem;
  @media (max-width: 1300px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 900px) {
    padding: 1.5rem 1rem;
    gap: 2rem;
  }
`;
const ContactDiv = styled("div")`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding: 1.5rem 1rem;
    flex-direction: column;
    gap: 2rem;
  }
`;
const ContactTitle = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Phone = styled("div")``;
const Email = styled("div")``;
const Img = styled("img")`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
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
  font-size: 28px;
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
