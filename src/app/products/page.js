"use client"

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar/page";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = async (category = "") => {
    try {
      setLoading(true);
      let url = "https://fakestoreapi.com/products";
      if (category) {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await axios.get(url);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderCards = () => {
    return (
    
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt="Product"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(add(product))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {renderCards()}
    </div>
    </>
  );
}

export default Products;
