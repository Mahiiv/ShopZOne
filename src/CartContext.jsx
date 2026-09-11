import React, { createContext, useState } from 'react'

// this is the global "box" that holds cart data so every page can see it
// without passing props down through every single component (no prop drilling)
export const CartContext = createContext()

export function CartProvider({ children }) {
  // cartItems is an array of objects like { id, title, price, thumbnail, quantity }
  const [cartItems, setCartItems] = useState([])

  // add to cart logic
  // if the item id already exists, just bump the quantity up by 1
  // if it doesnt exist yet, push it as a new item with quantity 1
  function addToCart(product) {
    const alreadyInCart = cartItems.find((item) => item.id === product.id)

    if (alreadyInCart) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  // removes one item completely from the cart (used on the cart page)
  function removeFromCart(productId) {
    const updatedCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCart)
  }

  // total number of items in the cart, used for the navbar badge
  // this adds up all the quantities, not just cartItems.length
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}
