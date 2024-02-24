import './Parallax.scss';
import {
  fireLandScapeBackground,
  fireballOne,
  fireballThree,
  fireballTwo,
  phoenix
} from '../../../assets';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxProps {
  // TODO
  type: string;
}

const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  return (
    <div
      className={`grid--parallax grid parallax parallax--${
        type === 'services' ? 'services' : 'journey'
      } `}
      ref={ref}
    >
      <div className='overlay'></div>
      <motion.h2 style={{ y: yBg }}>
        {type === 'services' ? 'My Mission' : 'My Journey'}
      </motion.h2>
      <img
        src={fireLandScapeBackground}
        alt=''
        className='landscape__img'
      />
      <motion.img
        style={{ y: yText }}
        src={fireballTwo}
        alt=''
        className='fireball__img fireball__img--1'
      />
      <motion.img
        src={fireballOne}
        alt=''
        className='fireball__img fireball__img--2'
        style={{ y: yBg2 }}
      />
      <img
        src={fireballThree}
        alt=''
        className='fireball__img fireball__img--3'
      />
      <motion.img
        src={phoenix}
        className='phoenix'
      />
    </div>
  );
};

export default Parallax;
