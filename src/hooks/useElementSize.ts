// useElementSize hook returns the current height and width of a given element.
// It is used to calculate the height and width of the parent element of the chat
// window so that the chat window can be resized to fit the screen.
// The hook uses useEventListener to listen for the resize event and
// useIsomorphicLayoutEffect to listen for changes in the height and width of the
// parent element of the chat window.
// Use of the useIsomorphicLayoutEffect hook is to ensure that the hook is
// compatible with both client and server side rendering.
// The hook uses useCallback to prevent too many rendering.
// The function returns the current height and width of the parent element of the
// chat window.

import { RefObject, useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface Size {
  width: number;
  height: number;
}

function useElementSize(ref: RefObject<HTMLDivElement>): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.current?.offsetWidth || 0,
      height: ref?.current?.offsetHeight || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.offsetHeight, ref?.current?.offsetWidth]);

  useEventListener("resize", handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.offsetHeight, ref?.current?.offsetWidth]);

  return size;
}

export default useElementSize;
