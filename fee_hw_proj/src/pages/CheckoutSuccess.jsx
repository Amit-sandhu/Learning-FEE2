import { Link, useLocation } from "react-router-dom";

// Confirm the demo order using navigation state.
function CheckoutSuccess() {
  const location = useLocation();
  const orderDetails = location.state;

  if (!orderDetails) {
    return (
      <section className="page-section">
        <div className="empty-state">
          <span className="empty-icon">♡</span>
          <h2>No order summary found</h2>
          <p>Place a demo order to see its confirmation.</p>
          <Link to="/products" className="button">Browse products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="empty-state order-success">
        <span className="empty-icon">✓</span>
        <p className="eyebrow">Order received</p>
        <h1>Thank you, {orderDetails.customerName}.</h1>
        <p>Your demo order has been placed successfully. No payment was collected.</p>
        <div className="success-total">
          <span>Order total</span>
          <strong>₹{Number(orderDetails.orderTotal).toLocaleString("en-IN")}</strong>
        </div>
        <Link to="/products" className="button">Continue exploring ↗</Link>
      </div>
    </section>
  );
}

export default CheckoutSuccess;