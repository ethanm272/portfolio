import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <Header pages={["home", "projects", "about"]} />
      <div className="text-input-container">
        <div className="text-container">
          <section>
            <h1 className="contact-h1 shimmer">Lets Talk.</h1>
            <p>
              Looking for a software engineer to join your company? Feel free to
              reach out so we can discuss how I can drive business outcomes at
              your company!
            </p>
          </section>
          <section className="about-contact-info">
            <h4 className="contact-h4">Email</h4>
            <p>ethan.mylett@yahoo.com</p>
          </section>
          <section className="about-contact-info">
            <h4 className="contact-h4">Check Me Out</h4>
            <a
              href="https://linkedin.com/in/mylett"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link block"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ethanm272"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link block"
            >
              GitHub
            </a>
          </section>
        </div>
        <form action="#" className="contact-form">
          <section className="single-input-container">
            <label htmlFor="fname">First Name</label>
            <input
              className="form-input"
              type="text"
              id="fname"
              name="fname"
              required
            />
          </section>
          <section className="single-input-container">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </section>
          <section className="single-input-container">
            <label htmlFor="message">Type your message here</label>
            <input
              className="form-input"
              type="text"
              id="message"
              name="message"
            />
          </section>
          <button
            type="submit"
            value="Submit"
            className="submit-btn btn-layered-3d btn-layered-3d--color"
          >
            Submit
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
};
