import './Parallax.scss';
interface ParallaxProps {
  // TODO
  type: string;
}
const Parallax = ({ type }: ParallaxProps) => {
  return (
    <section>
      <h2>{type === 'services' ? 'My Mission' : 'My Journey'}</h2>
    </section>
  );
};

export default Parallax;
