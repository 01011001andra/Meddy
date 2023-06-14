import React from "react";
import { animateScroll as scroll } from "react-scroll";

function useScrollToTop() {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  }, []);
}

export default useScrollToTop;
