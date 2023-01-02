import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import Portal from "../../../Portal/Portal";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.scss";
import useHamburgerStore from "store/useHamburgerStore";
import useSetPortalDisplay from "hooks/useSetPortalDisplay";

const Header: FC = () => {
  const isHamburgerAnimating = useHamburgerStore(
    (state) => state.isHamburgerAnimating
  );
  const isHambugerMenuOpen = useHamburgerStore(
    (state) => state.isHamburgerOpen
  );

  useSetPortalDisplay(isHamburgerAnimating, isHambugerMenuOpen);

  const toggleHamburger = useHamburgerStore((state) => state.toggleHamburger);

  const handleMenuButtonClick = () => {
    if (isHamburgerAnimating) return;
    toggleHamburger();
  };

  return (
    <header className={styles.wrapper}>
      <div></div>
      <button
        aria-label="Open Menu"
        type="button"
        className={styles.hamburgerButton}
        onClick={handleMenuButtonClick}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <Portal>
        <AnimatePresence>
          {isHambugerMenuOpen && <HamburgerMenu />}
        </AnimatePresence>
      </Portal>
    </header>
  );
};

export default Header;
