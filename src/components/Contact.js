import contactImage from '../photos/contact.png';
function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>

        <div className="contact-content">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="First Name" required/>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Last Name" required/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Email Address" required/>
              </div>

              <div className="form-group">
                <input type="tel" placeholder="Phone No." required/>
              </div>

            </div>

            <div className="form-group message-group">
              <textarea placeholder="Message" rows="7" required></textarea>
            </div>

            <button type="submit" className="message-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
