import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// Reuse the same product layout throughout the shop.
function ProductCard(props) {
  const product = props.product;
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  function handleAddToCart() {
    dispatch(addToCart(product));
    setShowMessage(true);
    window.setTimeout(function () {
      setShowMessage(false);
    }, 1800);
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-card-bottom">
          <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>
          <button className="button button-small" type="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        {showMessage && <p className="add-confirmation" role="status">Added to your cart ✓</p>}
      </div>
    </article>
  );
}

export default ProductCard;