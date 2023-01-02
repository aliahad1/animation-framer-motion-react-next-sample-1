import SidescrollingGallery from "components/SidescrollingGallery/SidescrollingGallery";
import useBackgroundColorStore from "store/useColorStore";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";

interface AnimatedTextCharacterProps {
  text: string;
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
  text,
}) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        fontWeight: "bold",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter: any, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const { backgroundColor } = useBackgroundColorStore();

  return (
    <>
      <Head>
        <title>Scroll Animation</title>
      </Head>
      <Layout>
        <motion.div
          className={styles.container}
          animate={{ backgroundColor: backgroundColor }}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>
              <div className="container h-screen mx-auto flex flex-col items-center justify-center">
                <AnimatedTextCharacter text="She was the embodiment of grace, kindness, and strength, and every single thing about her was simply perfect." />
              </div>
            </h1>
          </div>
          <SidescrollingGallery />
          <div className={styles.spacer} />
        </motion.div>
        <Footer />
      </Layout>
    </>
  );
}
