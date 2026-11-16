import { createSlice } from "@reduxjs/toolkit";

// Load saved cart data safely from browser storage.
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem("market-bloom-cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  } catch (error) {
    console.error("Could not load the saved cart.", error);
    return [];
  }
}

// Define the cart state and its allowed updates.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage()
  },
  reducers: {
    addToCart: function (state, action) {
      const selectedProduct = action.payload;
      const existingItem = state.items.find(function (item) {
        return item.id === selectedProduct.id;
      });

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({
          ...selectedProduct,
          quantity: 1
        });
      }
    },
    removeFromCart: function (state, action) {
      state.items = state.items.filter(function (item) {
        return item.id !== action.payload;
      });
    },
    increaseQuantity: function (state, action) {
      const selectedItem = state.items.find(function (item) {
        return item.id === action.payload;
      });

      if (selectedItem) {
        selectedItem.quantity = selectedItem.quantity + 1;
      }
    },
    decreaseQuantity: function (state, action) {
      const selectedItem = state.items.find(function (item) {
        return item.id === action.payload;
      });

      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity = selectedItem.quantity - 1;
        } else {
          state.items = state.items.filter(function (item) {
            return item.id !== action.payload;
          });
        }
      }
    },
    clearCart: function (state) {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;