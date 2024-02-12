import './NavigationBar.css';
import { GradientText } from '../../styles/GeneralStyles';
import { logo } from '../../assets';

function NavigationBar() {
  return (
    <nav className='navigation-bar flex'>
      <img
        className='navigation__logo'
        src={logo}
        alt=''
      />
      <ul className='navigation__items__list flex justify-center'>
        <li>
          <GradientText
            as='a'
            href='#about'
            title='About'
          >
            About Me
          </GradientText>
        </li>
        <li>
          <GradientText
            as='a'
            href='#home'
            title='Home'
          >
            Home
          </GradientText>
        </li>
        <li>
          <GradientText
            as='a'
            href='#portfolio'
            title='Portfolio'
          >
            Portfolio
          </GradientText>
        </li>
        <li>
          <GradientText
            as='a'
            href='#mission'
            title='Mission'
          >
            My Mission
          </GradientText>
        </li>
        <li>
          <GradientText
            as='a'
            href='#blog'
            title='Blog'
          >
            Blog
          </GradientText>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
