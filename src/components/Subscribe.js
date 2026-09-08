function Subscribe() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Subscribed successfully!");
  };

  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-text">
          <h2>See My Projects At Once<br />& leave Here Your E-mail<br />Address</h2>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;