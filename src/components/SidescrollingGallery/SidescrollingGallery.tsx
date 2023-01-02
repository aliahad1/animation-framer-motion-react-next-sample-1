import data from "data/gallery";
import useElementSize from "hooks/useElementSize";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useRef } from "react";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";
import useCurrentSlide from "./hooks/useCurrentSlide";
import useColorStore from "store/useColorStore";

const SidescrollingGallery = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const galleryWrapperRef = useRef<HTMLDivElement>(null);
  const totalSlides = data.length;
  const { width: galleryWidth } = useElementSize(galleryWrapperRef);
  const currentSlide = useCurrentSlide(
    titleRef,
    galleryWidth,
    totalSlides,
    galleryWrapperRef
  );

  const { setBackgroundColor, setTextColor, textColor } = useColorStore();

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    setBackgroundColor(data[currentSlide].backgroundColor);
    setTextColor(data[currentSlide].textColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <section>
      <div style={{ height: galleryWidth }}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1
              className={styles.title}
              ref={titleRef}
              style={{ color: textColor }}
            >
              Our Products
            </h1>
          </div>
          <div className={styles.galleryWrapper}>
            <ScrollSideways
              direction="left"
              initialX={windowWidth * 0.8}
              isEffectActive={true}
              offset={galleryWidth}
            >
              <div ref={galleryWrapperRef} className={styles.cardsWrapper}>
                {data.map((item, index) => {
                  return (
                    <Card
                      key={item.id}
                      cardIndex={index}
                      currentSlide={currentSlide}
                      {...item}
                    />
                  );
                })}
              </div>
            </ScrollSideways>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidescrollingGallery;
