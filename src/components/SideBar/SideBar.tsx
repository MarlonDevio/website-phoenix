import React from 'react';
import { Links, ToggleButton } from '..';
import './SideBar.scss';
import { motion } from 'framer-motion';

/**
 * Sidebar component that displays a toggleable sidebar with links.
 */
const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  /**
   * Event handler for opening and closing the sidebar.
   */
  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpen((prev) => !prev);
  };

  /**
   * Object containing the open state and the handleOpen event handler.
   */
  const openHandling = {
    handleOpen,
    open
  };

  /**
   * Variants for animating the sidebar open and closed.
   */
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
      <ToggleButton openHandling={openHandling} />
    </motion.div>
  );
};

export default SideBar;
