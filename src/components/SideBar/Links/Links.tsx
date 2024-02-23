import { sidebarLinks } from '../../../constants/constants';
import './Links.scss';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
};
const Links = () => {
  return (
    <motion.div
      className='links__container flex--column'
      variants={variants}
    >
      {sidebarLinks.map((item) => (
        <motion.a
          key={item.id}
          href={`#${item.sectionName.toLowerCase()}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.sectionName}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
