import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo src="/icons/logo-short.svg" alt="" />
        <H1>© 2022 არწივი პროდაქშენი</H1>
      </FooterContainer>
    </FooterSection>
  );
};
export default Footer;

const FooterSection = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f8f9;
`;
const FooterContainer = styled("div")`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  @media (max-width: 1300px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 900px) {
    padding: 1.5rem 1rem;
  }
`;
const Logo = styled("img")`
  width: 50px;
  @media (max-width: 950px) {
    width: 93px;
  }
`;
const H1 = styled("h1")`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #8896ab;
`;
