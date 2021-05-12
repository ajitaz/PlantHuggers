import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './search.component.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = (props) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');


    useEffect(() => {
        getProducts()
    }, [])


    function getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                setProducts(res.data)
            })
    }

    return (
        <>
            <label>Search</label>
            <input type="text" name="keyword" onChange={(e) => { setKeyword(e.target.value) }}></input>
            <div className='SearchedView'>
                {
                    products.map((item, index) => {
                        if (keyword == '') {
                            return ''
                        } else if (item.pname.toLowerCase().includes(keyword.toLowerCase())) {
                            return (
                                <div key={index}>
                                    <p >{item.pname}</p>
                                    <img src={`../images/${item.iname}`} alt="" height="200px" onClick={()=>{
                                      props.history.push(`/product?pid=${item.pid}&cid=${item.cid}`)
                                      props.close()
                                    }}/>
                                </div>
                            )
                        }

                    })
                }
            </div>
        </>
    )
}

export default withRouter(Search)