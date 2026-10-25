# Market Bloom — Mini E-commerce App

A beginner-friendly React shopping app using Vite, React Router DOM, Redux Toolkit, and localStorage.

## Run the project

1. Install Node.js (LTS) if it is not already installed.
2. Open a terminal inside this project folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Included features

- Home, Products, Cart, About, Checkout, and 404 pages
- React Router navigation and active navigation links
- Redux Toolkit cart state with all five required reducers
- Cart item count, quantities, removal, clear cart, and total price
- Cart saved in `localStorage` after refresh
- Product search and category filter
- Add-to-cart confirmation message
- Checkout form with basic validation and order summary
- Responsive layout and accessible labels
- Simple comments in each major code section

## Useful project structure

- `src/data/products.js`: product catalogue
- `src/features/cart/cartSlice.js`: Redux cart reducers
- `src/app/store.js`: Redux store setup
- `src/components/`: shared layout and reusable UI
- `src/pages/`: route pages
- `src/hooks/useCartPersistence.js`: localStorage persistence
- `src/styles.css`: all app styling

Product photos are loaded from Unsplash over the internet, so images need an internet connection. The app itself runs locally.
