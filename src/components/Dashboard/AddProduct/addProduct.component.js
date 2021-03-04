import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { DashNav } from '../DashNav/dashNav.component';
import './addProduct.component.css';
import axios from 'axios';

const BASE_URL = 'http://localhost:80/plant_hugger_php/';


export class AddProduct extends Component {


  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      price: '',
      quantity: '',
      cid: '',
      nid: '',
      image: '',
      data: []
    }
  }

  getCategory() {
    axios.get(`${BASE_URL}/viewContent.php?option=category`)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  componentDidMount() {
    this.getCategory();
    this.setState({
      nid : localStorage.getItem('uid')
    })
  }

  setNurseryid(){
    //post uid to action.php, set value ="getId" 
    //res=> nid = res.data
  }


  handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      this.setState({
        [name]: e.target.files[0]
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name)
    axios.post(`${BASE_URL}/addProduct.php`)
    .then(res=>res)
    .catch(err=>err)
  }


  render() {
    return (
      <>
        <Sidebar />
        <div className="main-content">
          <DashNav />
          <main>
            <h2 className="dash-title">Add Product</h2>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">ProductName</label>
                <input type="text" name="name" placeholder="product.." onChange={this.handleChange} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={this.handleChange}></textarea>
                {/* <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" name="tags" placeholder="product Tags.." /> */}
                <label htmlFor="price">Price</label>
                <input type="number" name="price" placeholder="product Price.." onChange={this.handleChange} />
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" placeholder="product quantity.." onChange={this.handleChange} />
                <label htmlFor="categories">Categories</label>
                <select name="cid" onChange={this.handleChange}>
                  <option value="">None</option>
                  {
                    this.state.data.map((result, index) => {
                      return (
                        <option key={index} value={result.cid}>{result.cname}</option>
                      )
                    })
                  }
                </select>
                <label htmlFor="img">Select image:</label>
                <input type="file" name="image" onChange={this.handleChange} />
                <input type="submit" value="Add" />
              </form>
            </div>
          </main>
        </div>
      </>
    )
  }
}
