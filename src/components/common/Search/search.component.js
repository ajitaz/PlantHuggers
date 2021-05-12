import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './search.component.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
    const [itemNames, setItemNames] = useState([]);
    const [keyword, setKeyword] = useState('');
    

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                res.data.forEach(element => {
                    setItemNames((prev) => ([...prev, element.pname]))
                });
            })
    }

    function handleChange(e){
        const [value] = e.target
        setKeyword(value)
    }

    return (
        <>
            <input type="text" name="keyword" onChange={handleChange}></input>
            <div>
                <p>Here we can display searched product</p>
            </div>
        </>
    )
}

export default Search