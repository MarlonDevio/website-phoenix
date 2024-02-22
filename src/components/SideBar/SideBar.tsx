import React from 'react';
import { Links, ToggleButton } from '..';
import './SideBar.scss';
import { motion } from 'framer-motion';

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpen((prev) => !prev);
  };
  const variants = {
    open: {
      clipPath: 'circle(120rem at 5rem 5rem)',
      transition: { type: 'spring', stiffness: 20 }
    },
    closed: {
      clipPath: 'circle(3rem at 5rem 5rem)',
      transition: { delay: 0.5, type: 'spring', stiffness: 400, damping: 40 }
    }
  };

  return (
    <motion.div
      className='sidebar flex--column'
      animate={open ? 'open' : 'closed'}
      variants={variants}
    >
      <div className='bg'>
        <Links />
      </div>
      <ToggleButton
        handleOpen={handleOpen}
        isOpen={open}
      />
    </motion.div>
  );
};

export default SideBar;
