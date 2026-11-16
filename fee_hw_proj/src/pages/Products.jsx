import { useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

// Search products and filter the catalogue by category.
function Products() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Home", "Accessories", "Workspace", "Stationery"];

  const filteredProducts = useMemo(function () {
    return products.filter(function (product) {
      const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase())
        || product.description.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  return (
    <section className="page-section">
      <SectionHeading
        eyebrow="The collection"
        title="Find your everyday favourite."
        description="A considered collection of little upgrades for your home, work, and everyday routines."
      />

      <div className="shop-tools">
        <label className="search-field">
          <span className="sr-only">Search products</span>
          <span aria-hidden="true">⌕</span>
          <input type="search" value={searchText} onChange={handleSearch} placeholder="Search the collection..." />
        </label>
        <label className="category-select-label">
          <span className="sr-only">Filter by category</span>
          <select value={selectedCategory} onChange={function (event) { setSelectedCategory(event.target.value); }}>
            {categories.map(function (category) {
              return <option key={category} value={category}>{category === "All" ? "All categories" : category}</option>;
            })}
          </select>
        </label>
      </div>

      <div className="results-line">
        <p>{filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"} to explore</p>
        {(searchText !== "" || selectedCategory !== "All") && (
          <button className="clear-filters" type="button" onClick={function () { setSearchText(""); setSelectedCategory("All"); }}>
            Clear filters
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(function (product) {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">⌕</span>
          <h2>No products found</h2>
          <p>Try a different search or choose another category.</p>
          <button className="button" type="button" onClick={function () { setSearchText(""); setSelectedCategory("All"); }}>
            Show all products
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;