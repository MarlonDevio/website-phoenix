const AppIcon = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0,0,256,256'
      width='50px'
      height='50px'
    >
      <g
        fill={color ? color : '#57ffc6'}
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        strokeDasharray=''
        strokeDashoffset='0'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform='scale(5.12,5.12)'>
          <path d='M15,5c-5.51133,0 -10,4.48867 -10,10v20c0,5.51133 4.48867,10 10,10h20c5.51133,0 10,-4.48867 10,-10v-20c0,-5.51133 -4.48867,-10 -10,-10zM15,7h20c4.43067,0 8,3.56933 8,8v20c0,4.43067 -3.56933,8 -8,8h-20c-4.43067,0 -8,-3.56933 -8,-8v-20c0,-4.43067 3.56933,-8 8,-8zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z'></path>
        </g>
      </g>
    </svg>
  );
};

export default AppIcon;
