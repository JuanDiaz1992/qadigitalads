import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const SvgLogo = ({ theme }) => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const controls = useAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    controls.start("visible").then(() => {
      setAnimationComplete(true);
    });
  }, [controls]);

  if (animationComplete) {
    return (
      <motion.svg
        className="logo_nav"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        }}
        transition={{ ease: "linear",
          duration: 2, }}
      >
        <g>
          <path
            fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            d="M30.5,19l1,1.1l-2.3,2.2l-1.2-1.4c-0.9,0.4-2,0.7-3.1,0.7c-4.2,0-7.4-3.5-7.4-7.4S20.6,7,24.8,7
               c4.2,0,7.4,3.4,7.4,7.3C32.3,16.1,31.6,17.7,30.5,19z M24.8,18.5c0.3,0,0.6,0,0.9-0.1l-2-2.2l2.4-2.2l2.2,2.5
               c0.4-0.6,0.6-1.4,0.6-2.2c0-2.3-1.7-4.1-4-4.1c-2.3,0-4,1.8-4,4.1C20.8,16.5,22.6,18.5,24.8,18.5z"
          />
          <path
            fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            d="M28.4,40.3h-6.8l-0.9,2.2H17l6-14.2h3.8l6.1,14.2h-3.6L28.4,40.3z M27.2,37.5L25,32.2l-2.2,5.3H27.2z"
          />
          <path
            fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            d="M33.3,23.6H16.7v2.9h16.6V23.6z"
          />
          <path
            fillRule="evenodd"
            fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            d="M47.2,2.8H2.8v44.4h44.4V2.8z M0,0v50h50V0H0z"
          />
        </g>
      </motion.svg>
    );
  }

  return (
    <motion.svg
      className="logo_nav"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      initial="hidden"
      animate={controls}
    >
      <g>
        <motion.path
          fill="none"
          stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
          strokeWidth="1"
          d="M30.5,19l1,1.1l-2.3,2.2l-1.2-1.4c-0.9,0.4-2,0.7-3.1,0.7c-4.2,0-7.4-3.5-7.4-7.4S20.6,7,24.8,7
               c4.2,0,7.4,3.4,7.4,7.3C32.3,16.1,31.6,17.7,30.5,19z M24.8,18.5c0.3,0,0.6,0,0.9-0.1l-2-2.2l2.4-2.2l2.2,2.5
               c0.4-0.6,0.6-1.4,0.6-2.2c0-2.3-1.7-4.1-4-4.1c-2.3,0-4,1.8-4,4.1C20.8,16.5,22.6,18.5,24.8,18.5z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
          strokeWidth="1"
          d="M28.4,40.3h-6.8l-0.9,2.2H17l6-14.2h3.8l6.1,14.2h-3.6L28.4,40.3z M27.2,37.5L25,32.2l-2.2,5.3H27.2z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
          strokeWidth="1"
          d="M33.3,23.6H16.7v2.9h16.6V23.6z"
          variants={pathVariants}
        />
        <motion.path
          fillRule="evenodd"
          fill="none"
          stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
          strokeWidth="1"
          d="M47.2,2.8H2.8v44.4h44.4V2.8z M0,0v50h50V0H0z"
          variants={pathVariants}
        />
      </g>
    </motion.svg>
  );
};

export default SvgLogo;
