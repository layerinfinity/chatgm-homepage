import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props: { children: any; }) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      console.log(location.pathname);
      switch (location.pathname) {
        case "/beta":
          document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(87.81deg, #0D042F -3.05%, #301C61 102.8%)'
          break;
        default:
          document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(87.81deg, #313131 2% , #1C4061 100%)'

      }

    }
  }, [location.pathname]);

  return <>{props.children}</>
};

export default ScrollToTop;