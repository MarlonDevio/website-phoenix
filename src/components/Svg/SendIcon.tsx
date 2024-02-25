const SendIcon = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 256 256'
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
          <path d='M44.4375,4.15625l-39.84375,17.125c-0.35547,0.15234 -0.58203,0.51563 -0.59375,0.90625c-0.01172,0.39063 0.21484,0.73047 0.5625,0.90625l13.9375,6.96875zM45.84375,5.5625l-25.90625,25.9375l6.96875,13.9375c0.17188,0.33984 0.52734,0.5625 0.90625,0.5625h0.03125c0.39063,-0.01172 0.71875,-0.23828 0.875,-0.59375z'></path>
        </g>
      </g>
    </svg>
  );
};

export default SendIcon;
