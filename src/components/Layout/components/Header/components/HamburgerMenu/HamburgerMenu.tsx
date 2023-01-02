import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./HamburgerMenu.module.scss";
import Link from "next/link";
import links from "data/links";
import useHamburgerStore from "store/useHamburgerStore";

const HamburgerMenu: FC = () => {
  const setisHamburgerAnimating = useHamburgerStore(
    (state) => state.setisHamburgerAnimating
  );

  const detailsVariants = {
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    exit: { opacity: 0 },
  };

  const backgroundVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: [0, 1, 1], originY: [0, 0, 1] },
    exit: { scaleY: [1, 0, 0] },
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1 className={styles.h1logo}>Logo.</h1>
        </div>

        <motion.div
          variants={detailsVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1>Get in touch</h1>
          <a href="mailto:hello@mail.com">hello@mail.com</a>
        </motion.div>
        <motion.nav
          variants={detailsVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.navigation}
        >
          {links.map((link) => {
            const linkNameArray = link.text.split("");
            return (
              <Link legacyBehavior href={link.href} key={link.id}>
                <a className={styles.menuLink}>
                  <span className={styles.letters}>
                    {linkNameArray.map((letter, index) => {
                      const evenLetterClass =
                        (index + 1) % 2 === 0
                          ? styles.evenLetter
                          : styles.oddLetter;

                      return (
                        <span
                          key={`${letter}_${index}`}
                          className={evenLetterClass}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                  <span className={styles.yellowLine} />
                  <span className={styles.turquoiseLine} />
                  <span className={styles.purpleLine} />
                </a>
              </Link>
            );
          })}
        </motion.nav>
      </div>
      <motion.div
        className={styles.background}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        onAnimationStart={() => setisHamburgerAnimating(true)}
        onAnimationComplete={() => setisHamburgerAnimating(false)}
      />
    </>
  );
};

export default HamburgerMenu;
