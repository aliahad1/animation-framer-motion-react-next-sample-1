import { FunctionComponent, useRef } from "react";
import { useReducedMotion, motion } from "framer-motion";
import ScrollSidewaysProps from "./ScrollSidewaysProps";
import useScrollSideways from "./hooks/useScrollSideways";

const ScrollSideways: FunctionComponent<ScrollSidewaysProps> = (props) => {
  const {
    children,
    offset = 50,
    isEffectActive,
    direction,
    initialX = 0,
    cssClass,
  } = props;
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useScrollSideways(ref, direction, offset, initialX);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={cssClass}
      initial={{ x: initialX }}
      ref={ref}
      style={{ x: x }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSideways;
