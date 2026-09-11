import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  // storing the products list and a loading flag so i know when the fetch is done
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // fetching the product list once when this page loads
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('error fetching products:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <p id="loading-text">Loading products...</p>
  }

  return (
    <div id="shop-page">
      <h1>Shop</h1>
      <div id="shop-grid">
        {products.map((product) => (
          // clicking this Link pushes the router to /product/:id, this is the dynamic routing part
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop
