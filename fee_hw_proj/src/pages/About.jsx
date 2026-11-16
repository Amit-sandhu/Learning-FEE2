import { Link } from "react-router-dom";

// Explain the store idea and link visitors back home.
function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="eyebrow">Our story</p>
        <h1>Less clutter.<br /><span>More meaning.</span></h1>
        <p>Market Bloom is a little corner for considered everyday things — useful objects, warm details, and pieces that earn their place in your life.</p>
        <Link to="/" className="button">Back to home ↗</Link>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90" alt="Calm, natural home interior" />
      </div>
      <div className="about-values">
        <div><span>01</span><h2>Choose thoughtfully</h2><p>We believe everyday items should be practical, pleasing, and easy to live with.</p></div>
        <div><span>02</span><h2>Keep it simple</h2><p>Good design does not need to shout. We look for pieces that feel quietly right.</p></div>
        <div><span>03</span><h2>Enjoy the everyday</h2><p>Small rituals and useful objects can make ordinary days feel a little better.</p></div>
      </div>
    </section>
  );
}

export default About;