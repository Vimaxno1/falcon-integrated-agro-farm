import React from "react";
import "./Products.css";

function Products() {
  const productList = [
    { id: 1, name: "Fresh Tomatoes", price: "$3/kg" },
    { id: 2, name: "Organic Eggs", price: "$5/dozen" },
    { id: 3, name: "Raw Honey", price: "$10/bottle" },
  ];

  return (
    <div className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
