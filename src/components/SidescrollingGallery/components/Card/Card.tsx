import CardProps from "./CardProps";
import styles from "./Card.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = (props: CardProps) => {
  const { title, image, cardIndex, currentSlide } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = cardIndex === currentSlide;

  const titleVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
    },
    initial: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div ref={cardRef} className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 384px, (min-width: 1200px) 384px, 384px"
      />
      <AnimatePresence>
        {isActive ? (
          <motion.h3
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.title}
          >
            {title}
          </motion.h3>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Card;
