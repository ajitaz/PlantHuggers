import React, { Component } from 'react';
import './addProduct.component.css';
import axios from 'axios';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
      categoryData: []
    }
  }

  getCategory() {
    axios.get(`${BASE_URL}/viewContent.php?option=category`)
      .then(res => {
        this.setState({
          categoryData: res.data
        })
      })
  }

  componentDidMount() {
    this.getCategory();
    this.setNurseryid();
  }

  setNurseryid() {
    let data = {
      value: 'getId',
      uid: localStorage.getItem('uid')
    }
    axios.post(`${BASE_URL}/action.php`, data, {
      headers: {
        'Content-Type': 'application/json'
      }, params: {},
      responseType: 'json'
    })
      .then(res => {
        this.setState({
          nid: res.data['nid']
        });
      })
      .catch(err => console.log(err))
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
    formData.append('description', this.state.description)
    formData.append('price', this.state.price)
    formData.append('quantity', this.state.quantity)
    formData.append('cid', this.state.cid)
    formData.append('nid', this.state.nid)
    formData.append('image', this.state.image)
    axios.post(`${BASE_URL}/addProduct.php`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Contetn-Type': 'multipart/formdata'
      }, params: {},
      responseType: 'json'
    })
      .then(res => {
        notify.showSuccess('Successfully Product Added...')
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <>
        <div id="main-content">
          <main>
            <h2 className="dash-title">Add Product</h2>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">ProductName</label>
                <input type="text" name="name" placeholder="product.." onChange={this.handleChange} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={this.handleChange}></textarea>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" placeholder="product Price.." onChange={this.handleChange} />
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" placeholder="product quantity.." onChange={this.handleChange} />
                <label htmlFor="categories">Categories</label>
                <select name="cid" onChange={this.handleChange}>
                  <option value="">None</option>
                  {
                    this.state.categoryData.map((result, index) => {
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
