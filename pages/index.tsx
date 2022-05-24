import type { NextPage } from "next";
import AboutUs from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/Info";
import Offers from "../components/offers";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Info />
      <Offers />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
