import "./Portfolio.css";
import { Container, PortfolioItem, Section } from "../../index.ts";
import { portfolioItems } from "../../../constants/constants.ts";

const Portfolio = () => {
  return (
    <Section $dark={false}>
      <Container>
        <h2>My Portfolio</h2>
        <h3>Creations That Inspire</h3>
        <p>
          Explore my collection of projects, each a milestone in my ongoing
          journey of growth and self-discovery. From innovative web applications
          to impactful community tools, every piece is crafted with the
          intention to motivate and uplift. These are not just projects; they
          are beacons of hope for anyone seeking to overcome their own
          challenges. Dive in and discover how technology can change lives,
          foster community, and create new beginnings.
        </p>
        <div className="portfolio__container grid grid-col-3 ">
          {portfolioItems.map((item, index) => {
            return <PortfolioItem key={index} portfolioItem={item} />;
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
