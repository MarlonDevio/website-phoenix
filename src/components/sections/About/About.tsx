import './About.scss';
import { Figure, Wrapper } from '../../index.ts';
import { profilePicture } from '../../../assets/index.ts';

const About = () => {
  return (
    <div id='about'>
      <Wrapper>
        <h2>About Me</h2>
        <div className='about__container flex'>
          <div className='about__container--text'>
            <h3>My Journey - From Ashes to Code</h3>
            <p>
              Hello, my name is Marlon. I am a 32-year-old self-taught developer
              with a story unlike any other. My journey, marked by overcoming
              significant personal and professional challenges has shaped me
              into the person I am today – a testament to the power of
              resilience and rebirth. I am not just a developer; I am a phoenix
              rising from the ashes, continuously learning, evolving, and
              helping others along the way. My passion for technology is
              intertwined with my mission to inspire and aid those who have
              faced similar battles. Every project, every line of code, is a
              step towards a brighter future – not just for me, but for all who
              believe in the possibility of transformation."
            </p>
          </div>
          <div className='about__container--image'>
            <div className='profile__gradient' />
            <Figure
              url={profilePicture}
              alt='Profile Picture'
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
