import React, { useEffect, useState } from 'react';
import './footer.component.css';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import notify from '../../Util/notify';
import { Button } from '../Button/button.component';
import Popup from 'reactjs-popup';

export const Footer = () => {

    const [state, setState] = useState({
        email: '',
        message: '',
        isValidForm:false
    });

    function sendFeedback(e) {
        e.preventDefault();
        let message = `user email :- ${state.email} \n  message :- ${state.message}`
        var templateParams = {
            message: message,
            user_email: 'planthuggerforyou@gmail.com'
        };
        emailjs.send('service_c5455lg', 'template_5r3vdvl', templateParams, 'user_CQQWpWC0YP59vNipgh111')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                notify.showSuccess('Thank you for your feedback.')
                setState({
                    email: '',
                    message: ''
                })
            }, function (err) {
                console.log('FAILED...', err);
            });
    }

    useEffect(()=>{
        validateForm();
    },[state.email,state.message])

    const validateForm = ()=>{
        if(state.message ==='' || state.email === ''){
            setState((prev)=>({
              ...prev,
              isValidForm:false  
            }))
        } else {
            setState((prev)=>({
                ...prev,
                isValidForm:true  
              }))
        }
    }

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-about box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>PlantHugger is an E-commerce web app where people can explore plants, buy gardening tools and products as well as explore their interests through articles written by many plantsmen and plant nurseries.</p>
                        <img src="../images/planthuggers.png" alt="" />
                        <p></p>
                    </div>
                </div>
                <div className="footer-links box">
                    <h2>Quick links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li><br/>
                        <li><Link to="/shop">Shop</Link></li><br/>
                        <li><Link to="/nursery">Nursery</Link></li><br/>
                        <li><Link to="/category">Category</Link></li><br/>
                        <li><Link to="/articles">Articles</Link></li>
                    </ul>
                </div>
                <div className="footer-contact box">
                <h2>Social Links</h2>
                    <ul id="social-links">
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-google-plus-g"></i></li>
                        
                    </ul>
                <Popup trigger={<h2 className="btn" style={{ cursor: 'pointer' }}> FeedBack</h2>} contentStyle={{ width: "700px", height: 'auto', overflow: 'hidden' }} modal>
                    {(
                    <div className="modal">
                       <div className="content">
                        <form onSubmit={sendFeedback}>
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" name="email" value={state.email} onChange={(e) => {
                                    setState((prevState) => ({
                                        ...prevState,
                                        email: e.target.value
                                    }))
                                }} required />
                            </div>
                            <div className="msg">
                                <div className="text">Message *</div>
                                <textarea name="message" value={state.message} onChange={(e) => {
                                    setState((prevState) => ({
                                        ...prevState,
                                        message: e.target.value
                                    }
                                    ))
                                }} required></textarea>
                            </div>
                            <Button
                                enabledLable='Send'
                                isValidForm={state.isValidForm}
                                isSubmitting={false}
                            ></Button>
                        </form>
                    </div>  
                    </div>
                  )}
            </Popup>
          </div>
        </div>
    </footer>
    )
}