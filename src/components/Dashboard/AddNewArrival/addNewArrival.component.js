import axios from 'axios';
import React, { useEffect, useState } from 'react';
import notify from '../../Util/notify';
import './addNewArrival.component.css';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const AddNewArrival = () => {

    const [state, setState] = useState([])

    function getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                setState(res.data)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])

    const [productId, setProductId] = useState()
    function handleChange(e) {
        setProductId(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let data = {
            pid:productId,
            value:'addNewArrival'
        }
        axios.post(`${BASE_URL}/action.php`,data,{
            headers:{
                'Content-Type':'application/json'
            },params:{},
            responseType:'json'
        })
        .then(res=>{
            notify.showInfo('New Arrival Added..');
        })
    }


    return (
        <>
            <div>
                <h2>Add New Arrival</h2>
                <form onSubmit={handleSubmit}>
                    <select name="productId" onChange={handleChange}>
                        {
                            state.map((product, index) => {
                                return (
                                    <option key={index} value={product.pid}>{product.pid}</option>
                                )
                            })
                        }
                    </select>
                    <input type='submit' value='Add'></input>
                </form>
            </div>
        </>
    )
}

export default AddNewArrival;