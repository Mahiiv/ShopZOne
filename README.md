# ShopZone

A multi-page e-commerce frontend built with React, React Router, and the Context API. Users can browse products, view individual product details, and manage a shopping cart all without a single page reload.

## Live Demo

- **Live URL:** https://shopzone-rose.vercel.app/_

## Features

- **Client-side routing** with `react-router-dom` — navigate between Home, Shop, Product Detail, Contact, and Cart without triggering a browser refresh
- **Dynamic routing** — clicking a product takes you to `/product/:id`, where the specific product is fetched using its ID from the URL
- **Global cart state** via the Context API — no prop drilling, any component can read or update the cart
- **Live cart badge** in the navbar that updates instantly when items are added
- **Cart page** that lists selected items and calculates the total price

## Tech Stack

- React (with Vite)
- React Router (`react-router-dom`)
- Context API for global state
- [dummyjson.com](https://dummyjson.com/products) as the product data source

## Project Structure

```
shopzone/
├── index.html
├── vercel.json
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── CartContext.jsx
│   ├── components/
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Shop.jsx
│       ├── ProductDetail.jsx
│       ├── Contact.jsx
│       └── Cart.jsx

## AI Usage

This project was built with Claude as a pair-programmer for explaining architectural concepts (Context API, React Router, `useParams`) and debugging errors.
