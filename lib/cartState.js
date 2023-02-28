import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext(null);

const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider! We will store data (state)
  // and functionality (updates) in here and anyone can access it via the consumer!
  const [cartOpen, setCartOpen] = useState(false);
  const [ref, setRefForCartFocus] = useState(null);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function openCart() {
    setCartOpen(true);
    console.log(ref);
    ref.current.focus();
  }

  function closeCart() {
    setCartOpen(false);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, closeCart, openCart, toggleCart, setRefForCartFocus }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state

function useCart() {
  const data = useContext(LocalStateContext);
  return data;
}

export { CartStateProvider, useCart };
