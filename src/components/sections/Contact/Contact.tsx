import './Contact.scss';
import { Form, Wrapper } from '../../index.ts';

const Contact = () => {
  return (
    <section id='contact'>
      <Wrapper>
        <h2>Contact</h2>
        <h3>Ignite Opportunities</h3>
        <p>
          Ready to transform challenges into triumphs together? Whether you're
          seeking collaboration, need guidance, or want to share your journey,
          I'm here to listen and work with you. Let's ignite new opportunities
          and create something impactful. Reach out to me, and let's start a
          conversation that could change our paths
        </p>

        <Form />
      </Wrapper>
    </section>
  );
};

export default Contact;
