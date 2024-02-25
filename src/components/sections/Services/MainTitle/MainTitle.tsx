import { StyledButton } from '../../..';
import './MainTitle.scss';
import { motion } from 'framer-motion';

const MainTitle = () => {
  return (
    <motion.div className='services__main__title flex--column'>
      <div className='services__main__title__container services__main__title__container--upper'>
        <StyledButton className='services__main__title--img'></StyledButton>
        <h2>
          <b>Innovative</b> <span>Paths</span>
        </h2>
      </div>

      <div className='services__main__title__container services__main__title__container--lower'>
        <h2>
          <b>Transformative</b> <span>Outcomes</span>
        </h2>
        <StyledButton className='services__main__title--img'>
          What we do?
        </StyledButton>
      </div>
    </motion.div>
  );
};

export default MainTitle;
