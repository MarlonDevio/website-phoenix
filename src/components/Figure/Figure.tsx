import './Figure.scss';
interface FigureProps {
  url: string;
  alt: string;
  className?: string;
}

const Figure = ({ url, alt, className }: FigureProps) => {
  return (
    <figure className={`figure ${className}`}>
      <img
        src={url}
        alt={alt}
      />
    </figure>
  );
};

export default Figure;
