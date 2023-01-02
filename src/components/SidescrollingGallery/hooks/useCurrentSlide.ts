import useEventListener from "hooks/useEventListener";
import { RefObject, useEffect, useState } from "react";

const useCurrentSlide = (
  titleRef: RefObject<HTMLElement>,
  galleryWidth: number,
  totalSlides: number,
  ref: RefObject<HTMLDivElement>
): number => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleRight, setTitleRight] = useState(0);
  const [galleryWrapperLeft, setGalleryWrapperLeft] = useState<
    number | undefined
  >(undefined);

  const getGalleryWrapperLeft = (cardRef: RefObject<HTMLElement>) => {
    if (!cardRef) return 0;

    const left = cardRef?.current?.getBoundingClientRect().left || 0;
    return left;
  };

  useEventListener("scroll", () =>
    setGalleryWrapperLeft(getGalleryWrapperLeft(ref))
  );

  useEffect(() => {
    if (!galleryWrapperLeft) return;

    for (let i = 0; i < totalSlides; i++) {
      if (
        titleRight / 2 <
        galleryWrapperLeft + (galleryWidth / totalSlides) * i
      ) {
        setCurrentSlide(i);
        break;
      }
    }
  }, [galleryWidth, galleryWrapperLeft, titleRight, totalSlides]);

  useEffect(() => {
    if (!titleRef.current) return;
    const { right } = titleRef.current.getBoundingClientRect();
    setTitleRight(right);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return currentSlide;
};

export default useCurrentSlide;
