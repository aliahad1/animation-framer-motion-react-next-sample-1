import { RefObject, useState } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";

const useScrollSideways = (
  ref: RefObject<HTMLElement>,
  direction: "left" | "right",
  offset: number,
  initialX: number
) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  const initial = Math.max(elementTop - clientHeight, 0);
  const final = elementTop + offset;

  const directionValue = direction === "left" ? -1 : 1;

  const xRange = useTransform(
    scrollY,
    [initial, final],
    [initialX, offset * directionValue]
  );
  const x = useSpring(xRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY || window.scrollY
        );
      }
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return x;
};

export default useScrollSideways;
