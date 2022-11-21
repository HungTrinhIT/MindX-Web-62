import React, { useEffect, useState } from "react";

const useViewport = (props) => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });
  const handleScreenResize = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    setViewport({
      width: currentWidth,
      height: currentHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return {
    width: viewport.width,
    height: viewport.height,
    isMobile: viewport.width <= 480,
    isTablet: viewport.width > 480 && viewport.width < 1024,
    isDesktop: viewport.width > 1024,
  };
};

export default useViewport;
