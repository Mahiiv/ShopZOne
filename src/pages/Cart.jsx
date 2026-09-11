import React, { useContext } from 'react'
import { CartContext } from '../CartContext.jsx'

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext)

  // adding up price times quantity for every item to get the total
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div id="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty. Go add something from the Shop page.</p>
      </div>
    )
  }

  return (
    <div id="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div className="cart-row" key={item.id}>
          <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button className="remove-button" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <h2 id="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  )
}

export default Cart
