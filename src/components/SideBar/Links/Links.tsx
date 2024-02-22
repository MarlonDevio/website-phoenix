import { sidebarLinks } from '../../../constants/constants';
import './Links.scss';

const variants = {
  open: {
    transition: {
      staggeredChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const Links = () => {
  return (
    <div className='links__container flex--column'>
      {sidebarLinks.map((item) => (
        <a
          key={item.id}
          href={`#${item.sectionName.toLowerCase()}`}
        >
          {item.sectionName}
        </a>
      ))}
    </div>
  );
};

export default Links;
