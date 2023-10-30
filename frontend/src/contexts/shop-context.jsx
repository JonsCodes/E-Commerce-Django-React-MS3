import React, { createContext, useReducer, useContext } from "react";

// Define your initial state
const initialState = {
  cartItems: {}, // This will store the items in the cart
};

// Define action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Create a reducer function to update the state based on actions
function shopReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { itemId } = action.payload;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [itemId]: {
            name: action.payload.name,
            quantity: (state.cartItems[itemId]?.quantity || 0) + 1,
          },
        },
      };
    case REMOVE_FROM_CART:
      const { itemId: removedItemId } = action.payload;
      const { [removedItemId]: _, ...updatedCartItems } = state.cartItems;
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
}

// Create a context for the shopping cart
const ShopContext = createContext();

// Create a ShopProvider component to provide the context to your app
export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );

  // Helper functions to dispatch actions
  function addToCart(itemId, itemName) {
    dispatch({ type: ADD_TO_CART, payload: { itemId, name: itemName } });
  }

  function removeFromCart(itemId) {
    dispatch({ type: REMOVE_FROM_CART, payload: { itemId } });
  }
}

// Create a custom hook to access the ShopContext
export function useShop() {
  return useContext(ShopContext);
}
