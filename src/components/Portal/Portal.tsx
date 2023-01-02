import { useEffect, useState, FC } from "react";
import { createPortal } from "react-dom";
import PortalProps from "./PortalProps";

const Portal: FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector("#portal-root") as HTMLElement
      )
    : null;
};

export default Portal;
