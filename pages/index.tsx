import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Link href={"/auth"}>Get started</Link>
    </div>
  );
};

export default Home;
