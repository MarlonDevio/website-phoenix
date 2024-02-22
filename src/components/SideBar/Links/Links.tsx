import { sidebarLinks } from '../../../constants/constants';
import './Links.scss';

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
