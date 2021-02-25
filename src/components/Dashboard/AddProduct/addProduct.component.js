import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import './addProduct.component.css';


export const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <header>
          <div className="welcome">
            <p>Welcome, Ramesh</p>
          </div>
          <div className="social-icons">
            <Link to="/login"><button className="lbtn">Logout</button></Link>
            <Link to="/"><button className="sbtn">Home</button></Link>
          </div>
        </header>
        <main>
          <h2 className="dash-title">Add Product</h2>
          <div className="form">
            <form method="POST">
              <label htmlFor="pname">ProductName</label>
              <input type="text" id="pname" name="productname" placeholder="product.." />
              <label htmlFor="psw">Description</label>
              <textarea id="descrip" name="description"></textarea>
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags" name="tags" placeholder="product Tags.." />
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" placeholder="product Price.." />
              <label htmlFor="status">Status</label>
              <select id="status" name="status">
                <option value="">None</option>
                <option value="Avialiable">Avialiable</option>
                <option value="Out of stock">Out of stock</option>
              </select>
              <label htmlFor="discount">Discount</label>
              <input type="number" id="discount" name="discount" placeholder="product Discount.." />
              <label htmlFor="categories">Categories</label>
              <select id="categories" name="categories">
                <option value="">None</option>
                <option value="Indoor Plant">Indoor Plant</option>
                <option value="Outdoor Plant">Outdoor Plant</option>
              </select>
              <label htmlFor="img">Select image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
              <input type="submit" value="Add" />
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
