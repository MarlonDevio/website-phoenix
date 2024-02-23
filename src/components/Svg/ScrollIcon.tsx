import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const ScrollIconGreen = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="48px"
      height="48px"
      variants={animationVariants}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient
          x1="7.897"
          y1="23.482"
          x2="22.212"
          y2="37.796"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0.365" stopColor="#57ffc6"></stop>
          <stop offset="0.699" stopColor="#00d062"></stop>
          <stop offset="0.819" stopColor="#009c4a"></stop>
          <stop offset="0.905" stopColor="#058743"></stop>
          <stop offset="0.974" stopColor="#57ffc6"></stop>
          <stop offset="1" stopColor="#57ffc6"></stop>
        </linearGradient>
        <linearGradient
          x1="21.052"
          y1="42.533"
          x2="39.484"
          y2="24.101"
          gradientUnits="userSpaceOnUse"
          id="color-2"
        >
          <stop offset="0" stopColor="#57ffc6"></stop>
          <stop offset="1" stopColor="#004d24"></stop>
        </linearGradient>
        <linearGradient
          x1="7.897"
          y1="5.482"
          x2="22.212"
          y2="19.796"
          gradientUnits="userSpaceOnUse"
          id="color-3"
        >
          <stop offset="0.365" stopColor="#57ffc6"></stop>
          <stop offset="0.699" stopColor="#00d062"></stop>
          <stop offset="0.819" stopColor="#009c4a"></stop>
          <stop offset="0.905" stopColor="#058743"></stop>
          <stop offset="0.974" stopColor="#57ffc6"></stop>
          <stop offset="1" stopColor="#57ffc6"></stop>
        </linearGradient>
        <linearGradient
          x1="21.052"
          y1="24.533"
          x2="39.484"
          y2="6.101"
          gradientUnits="userSpaceOnUse"
          id="color-4"
        >
          <stop offset="0" stopColor="#57ffc6"></stop>
          <stop offset="1" stopColor="#004d24"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(5.33333,5.33333)">
          <path
            d="M22.599,44.299l-15.483,-15.484c-0.774,-0.774 -0.774,-2.028 0,-2.802l3.312,-3.312c0.774,-0.774 2.028,-0.774 2.802,0l15.483,15.483c0.774,0.774 0.774,2.028 0,2.802l-3.312,3.312c-0.774,0.774 -2.028,0.774 -2.802,0.001z"
            fill="url(#color-1)"
          ></path>
          <path
            d="M19.287,38.185l15.483,-15.483c0.774,-0.774 2.028,-0.774 2.802,0l3.312,3.312c0.774,0.774 0.774,2.028 0,2.802l-15.483,15.483c-0.774,0.774 -2.028,0.774 -2.802,0l-3.312,-3.312c-0.773,-0.774 -0.773,-2.028 0,-2.802z"
            fill="url(#color-2)"
          ></path>
          <path
            d="M22.599,26.299l-15.483,-15.484c-0.774,-0.774 -0.774,-2.028 0,-2.802l3.312,-3.312c0.774,-0.774 2.028,-0.774 2.802,0l15.483,15.483c0.774,0.774 0.774,2.028 0,2.802l-3.312,3.312c-0.774,0.774 -2.028,0.774 -2.802,0.001z"
            fill="url(#color-3)"
          ></path>
          <path
            d="M19.287,20.185l15.484,-15.484c0.774,-0.774 2.028,-0.774 2.802,0l3.312,3.312c0.774,0.774 0.774,2.028 0,2.802l-15.484,15.484c-0.774,0.774 -2.028,0.774 -2.802,0l-3.312,-3.312c-0.773,-0.774 -0.773,-2.028 0,-2.802z"
            fill="url(#color-4)"
          ></path>
        </g>
      </g>
    </motion.svg>
  );
};

export default ScrollIconGreen;
