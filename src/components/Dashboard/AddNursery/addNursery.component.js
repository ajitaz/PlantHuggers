import React, { Component } from 'react';
import { DashNav } from '../DashNav/dashNav.component';
import './addNursery.component.css';
import axios from 'axios';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class AddNursery extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      address: '',
      phone: '',
      email:'',
      image: ''
    }
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
    formData.append('address', this.state.address)
    formData.append('phone', this.state.phone)
    formData.append('email',this.state.email)
    formData.append('image', this.state.image)

    axios.post(`${BASE_URL}/addNursery.php`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Contetn-Type': 'multipart/formdata'
      }, params: {},
      responseType: 'json'
    })
      .then(res => {
        notify.showSuccess('Successfully Nursery Added...')
        this.props.history.push('/dashboard/viewNursery')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div id="main-content">
          <DashNav />
          <main>
            <h2 className="dash-title">Add Nursery</h2>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="Nname">Nursery Name</label>
                <input type="text" name="name" placeholder="Nursery.." onChange={this.handleChange} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={this.handleChange}></textarea>
                <label htmlFor="phone">Phone</label>
                <input type="Number" name="phone" placeholder="Phone No.." onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email.." onChange={this.handleChange} />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Address.." onChange={this.handleChange} />
                <label htmlFor="img">Select Nursery image:</label>
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
