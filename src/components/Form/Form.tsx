import "./Form.css";
import { FormButton } from "../index.ts";

const Form = () => {
  return (
    <form action="" className="contact__form flex-column">
      <div className="form__section">
        <label htmlFor="firstName">
          First Name <span>*</span>
        </label>
        <input
          placeholder="Enter your first name"
          type="text"
          name="firstName"
          required
          id="firstName"
        />
      </div>
      <div className="form__section">
        <label htmlFor="lastName">
          Last Name <span>*</span>
        </label>
        <input
          placeholder="Enter your last name"
          type="text"
          name="lastName"
          required
          id="lastName"
        />
      </div>

      <div className="form__section">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          placeholder="Enter your emailadres"
          type="email"
          name="email"
          required
          id="email"
        />
      </div>

      <div className="form__section">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          placeholder="Enter your phone number"
          type="number"
          name="phoneNumber"
          id="phoneNumber"
        />
      </div>

      <div className="form__section">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea name="message" id="message" required></textarea>
      </div>
      <FormButton type="submit">Send</FormButton>
    </form>
  );
};

export default Form;
