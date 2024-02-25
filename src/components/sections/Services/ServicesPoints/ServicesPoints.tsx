import "./ServicesPoints.scss";
import { services } from "../../../../constants/constants.ts";

interface serviceProps {
  service: {
    title: string;
    icon: string;
    description: string;
  };
}

const Service = ({ service }: serviceProps) => {
  return (
    <article className="services__points__service">
      <div>
        <h6>{service.title}</h6>
        <img src={service.icon} alt={service.title} />
        <p>{service.description}</p>
      </div>
    </article>
  );
};

const ServicesPoints = () => {
  return (
    <div className="services__points">
      {services.map((service) => (
        <Service service={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServicesPoints;
