import { Link } from "react-router-dom";

// Give unknown URLs a helpful route back into the store.
function NotFound() {
  return (
    <section className="empty-state not-found">
      <p className="eyebrow">404 · Wrong turn</p>
      <h1>This page wandered off.</h1>
      <p>We could not find the page you were looking for.</p>
      <Link to="/" className="button">Back to home</Link>
    </section>
  );
}

export default NotFound;