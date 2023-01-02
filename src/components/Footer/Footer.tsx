import { AnimatePresence, motion } from "framer-motion";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <AnimatePresence>
      {/* your footer content goes here */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
      >
        <footer className={styles.footer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className={styles.foo}>© 2021 - All rights reserved</p>
          </motion.div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
