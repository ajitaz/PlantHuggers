import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import './addNursery.component.css';


export const addNursery = () => {
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
          <h2 className="dash-title">Add Nursery</h2>
          <div className="form">
            <form method="POST">
              <label htmlFor="Nname">Nursery Name</label>
              <input type="text" id="Nname" name="nurseryname" placeholder="Nursery.." />
              <label htmlFor="descrip">Description</label>
              <textarea id="descrip" name="description"></textarea>
              <label htmlFor="phone">Phone</label>
              <input type="Number" id="phone" name="phone" placeholder="Phone No.." />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Address.." />
              <label htmlFor="img">Select Nursery image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
              <input type="submit" value="Add" />
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
