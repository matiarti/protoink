import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components/native";
import Loader from "../src/Loader";

export default function Loading({ isLoading, children, ...props }) {
  /* showLoader is used to stay in the "isLoading state" a bit longer to avoid loading flashes
   if the loading state is too short. */
  const [showLoader, setShowLoader] = React.useState(false);

  const [isFirstButtonLoading, setIsFirstButtonLoading] = React.useState(false);
  const [isSecondButtonLoading, setIsSecondButtonLoading] = React.useState(
    false
  );
  const [loadingSpeed, setLoadingSpeed] = React.useState(1);

  React.useEffect(() => {
    if (isFirstButtonLoading) {
      setTimeout(() => {
        setIsFirstButtonLoading(false);
      }, 1000 / loadingSpeed);
    }

    if (isSecondButtonLoading) {
      setTimeout(() => {
        setIsSecondButtonLoading(false);
      }, 1000 / loadingSpeed);
    }
  }, [isFirstButtonLoading, isSecondButtonLoading, loadingSpeed]);

  React.useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  /* Capture the dimensions of the button before the loading happens
  so it doesn’t change size.
  These hooks can be put in a seprate file. */
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  // Hooks used to fade in/out the loader or the button contents
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

  return (
    <View
      {...props}
      className="button"
      ref={ref}
      style={
        showLoader
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
    >
      {showLoader ? (
        <animated.div style={fadeOutProps}>
          <Loader />
        </animated.div>
      ) : (
        <animated.div style={fadeInProps}>{children}</animated.div>
      )}
    </View>
  );
}

const View = styled.View``;
