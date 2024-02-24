import './Portfolio.scss';
import { portfolioItems } from '../../../constants/constants.ts';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StyledButton from '../../StyledComponents/StyledButton';
import { Figure, Wrapper } from '../../index.ts';

interface PortfolioItemProps {
  item: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section ref={ref}>
      <div className='portfolio__item__container flex'>
        <Wrapper
          className='portfolio__item__wrapper'
          display='flex'
        >
          <Figure
            className='portfolio__img__container'
            url={item.image}
            alt={item.title}
          />
          <motion.div
            // style={{ y }}
            className='portfolio__item__container--text'
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <StyledButton primary>
              <a
                target='_blank'
                href={item.url}
              >
                See Live
              </a>
            </StyledButton>
          </motion.div>
        </Wrapper>
      </div>
      {item.title}
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div
      id='portfolio'
      className='portfolio'
      ref={ref}
    >
      <motion.div className='progress'>
        <h2>My Work</h2>
        <motion.div
          style={{ scaleX }}
          className='progress__bar'
        ></motion.div>
      </motion.div>
      {portfolioItems.map((item) => (
        <PortfolioItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Portfolio;
