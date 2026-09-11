import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext.jsx'

function ProductDetail() {
  // useParams grabs the :id part from the url, like /product/5 gives us id = "5"
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { addToCart } = useContext(CartContext)

  // whenever the id in the url changes, fetch that specific product again
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('error fetching product:', error)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <p id="loading-text">Loading product...</p>
  }

  if (!product) {
    return <p id="loading-text">Product not found.</p>
  }

  return (
    <div id="product-detail-page">
      <img src={product.thumbnail} alt={product.title} id="product-detail-image" />
      <div id="product-detail-info">
        <h1>{product.title}</h1>
        <p id="product-detail-price">${product.price}</p>
        <p>{product.description}</p>
        <button id="add-to-cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
