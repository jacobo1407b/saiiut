import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbars/Navbar";
import Fixed from "../components/FixedPlugin/FixedPlugin";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle";

let ps;
const useStyles = makeStyles(styles);

const layout = ({rout,route}) => {
  const classes = useStyles();
  const defaultImage = localStorage.getItem('bgImage')
  const defaultColor = localStorage.getItem('color');

  const mainPanel = React.createRef();
  const [color, setColor] = React.useState(defaultColor?defaultColor:"blue");
  const [image, setImage] = React.useState(defaultImage?defaultImage:bgImage);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [option, setOption] = React.useState(true)

  const handleImageClick = (image) => {
    localStorage.setItem('bgImage', image)
    setImage(image);
  };
  const handleColorClick = (color) => {
    localStorage.setItem('color',color)
    setColor(color);
  };
  const chambiar =()=>{
    setOption(!option);
  }
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={route}
        logoText={"Saiiut"}
        image={image}
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        chambiar={chambiar}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={route}
          handleDrawerToggle={handleDrawerToggle}
          chambiar={chambiar}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            {rout}
          </div>
        </div>
        <Fixed
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
};

export default layout;
