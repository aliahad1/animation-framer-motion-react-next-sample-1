import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>About Page</h1>
      </main>
    </Layout>
  );
};

export default About;
