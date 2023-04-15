import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="newsletter-signup">
        <div className="signup-form-wrapper">
          <p className="signup-title">Hello, join our newsletter</p>
          <form id="footer-newsletter-form">
            <input
              type="email"
              placeholder="email@example.com"
              id="mail"
            ></input>
            <button onClick={(e) => e.preventDefault()} type="submit">
              Sign up!
            </button>
          </form>
          <p className="newsletter-terms">
            By submitting your email you agree that GRN may send you promotional
            e-mail messages with offers, updates and other marketing messages.
            You understand that GRN may use your information according with its
            Privacy Policy.
          </p>
        </div>
      </div>
      <div className="footer-informational-content">
        <div className="footer-links">
          <div className="info-links">
            <a>FAQS</a>
            <a>SHIPPING</a>
            <a>CONTACT US</a>
            <a>PRIVACY</a>
          </div>
          <div className="nav-links">
            <a>PRODUCTS</a>
            <a>BESTSELLERS</a>
            <a>BLOG</a>
            <a>ABOUT US</a>
          </div>
          <div className="social-links">
            <a>FACEBOOK</a>
            <a>INSTAGRAM</a>
            <a>TIK TOK</a>
            <a href="https://github.com/micsiw">GITHUB</a>
          </div>
        </div>
        <div className="footer-signature">Created by Michał Siwanowicz</div>
      </div>
    </div>
  );
}

export default Footer;
