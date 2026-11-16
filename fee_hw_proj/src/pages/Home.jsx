import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

// Introduce the store and guide visitors toward shopping.
function Home() {
  const navigate = useNavigate();
  const cartItems = useSelector(function (state) {
    return state.cart.items;
  });

  const featuredProducts = products.slice(0, 4);
  const itemCount = cartItems.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A little more intentional</p>
          <h1>Good things for<br /><span>everyday living.</span></h1>
          <p className="hero-description">
            Discover useful, beautiful things that make ordinary moments feel special.
            Thoughtfully picked, easy to love.
          </p>
          <div className="hero-actions">
            <button className="button" type="button" onClick={function () { navigate("/products"); }}>
              Explore the collection <span aria-hidden="true">↗</span>
            </button>
            <Link to="/cart" className="text-link">View your cart ({itemCount})</Link>
          </div>
          <div className="hero-trust">
            <span>✦ Curated essentials</span>
            <span>✦ Easy everyday style</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90" alt="Warm, thoughtfully styled living room" />
          <div className="hero-note"><span>THE LITTLE THINGS</span><strong>Make home feel like you.</strong></div>
          <div className="hero-sparkle" aria-hidden="true">✳</div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Store benefits">
        <div><span className="benefit-icon">✿</span><div><strong>Thoughtfully chosen</strong><p>Useful things, lovely details</p></div></div>
        <div><span className="benefit-icon">♡</span><div><strong>Made for real life</strong><p>Style without the fuss</p></div></div>
        <div><span className="benefit-icon">↗</span><div><strong>Small joys, daily</strong><p>Bring a little calm home</p></div></div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div><p className="eyebrow">A few favourites</p><h2>Meet your new essentials</h2></div>
          <Link to="/products" className="text-link">Shop everything ↗</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(function (product) {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>

      <section className="bottom-cta">
        <div><p className="eyebrow">Your next favourite is waiting</p><h2>Make room for good things.</h2></div>
        <Link to="/products" className="button button-light">Browse the shop ↗</Link>
      </section>
    </div>
  );
}

export default Home;