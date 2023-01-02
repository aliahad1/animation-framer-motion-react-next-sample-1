import { useEffect } from "react";

const useSetPortalDisplay = (
  isHamburgerAnimating: boolean,
  isHambugerMenuOpen: boolean
) => {
  useEffect(() => {
    if (!isHambugerMenuOpen && !isHamburgerAnimating) {
      document.body.classList.remove("portal-visible");
    } else {
      document.body.classList.add("portal-visible");
    }
  }, [isHamburgerAnimating, isHambugerMenuOpen]);
};

export default useSetPortalDisplay;
