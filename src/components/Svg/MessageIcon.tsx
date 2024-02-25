const MessageIcon = ({ color }) => {
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
          <path d='M43,4h-36c-2.8,0 -5,2.2 -5,5v24c0,2.8 2.2,5 5,5h4.1c0.3,2.9 -0.5,4.9 -2.7,6.1c-0.4,0.2 -0.6,0.7 -0.4,1.1c0.2,0.5 0.6,0.8 1,0.8c2.6,0 8.7,-0.8 11.7,-8h22.3c2.8,0 5,-2.2 5,-5v-24c0,-2.8 -2.2,-5 -5,-5z'></path>
        </g>
      </g>
    </svg>
  );
};

export default MessageIcon;
