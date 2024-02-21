import "./PortfolioItem.css";
interface PortfolioItemProps {
  portfolioItem: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}
const PortfolioItem = ({ portfolioItem }: PortfolioItemProps) => {
  const { title, image, url, description } = portfolioItem;
  return (
    <article className="portfolio__item">
      <figure>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <a title={title} href={url}></a>
        </p>
      </figure>
    </article>
  );
};

export default PortfolioItem;
