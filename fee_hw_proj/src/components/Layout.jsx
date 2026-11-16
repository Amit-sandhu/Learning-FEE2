import { NavLink, Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Show shared navigation and the current cart item count.
function Layout() {
  const cartItems = useSelector(function (state) {
    return state.cart.items;
  });

  const totalItems = cartItems.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  function getLinkClassName(linkInfo) {
    if (linkInfo.isActive) {
      return "nav-link active";
    }
    return "nav-link";
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Market Bloom home">
            <span className="brand-mark">m.</span>
            <span>market bloom</span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end className={getLinkClassName}>Home</NavLink>
            <NavLink to="/products" className={getLinkClassName}>Shop</NavLink>
            <NavLink to="/about" className={getLinkClassName}>Our story</NavLink>
            <NavLink to="/cart" className={getLinkClassName}>
              Cart <span className="cart-count">{totalItems}</span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <Link to="/" className="footer-brand">market bloom</Link>
          <p>Thoughtful finds for slower, brighter days.</p>
        </div>
        <p className="footer-note">Made for the everyday · © 2026 Market Bloom</p>
      </footer>
    </div>
  );
}

export default Layout;