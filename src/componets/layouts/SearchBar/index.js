import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './searchBar.module.css';
import { MdSearch } from 'react-icons/md';
import BoxSearch from '../boxSearch/boxSearch';
import * as productService from "../../../service/productService";
import axios from 'axios';
import { getTTFB } from 'web-vitals';
let cx = classNames.bind(styles);
function SearchBar() {
    const [product, setProduct] = useState([])
    const [openBox, setOpenBox] = useState(false)
    const [searchProduct, setSearchProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/products').then(res => setProduct(res.data))
    }, [])
    function getProduct(e) {
        let valueName = e.target.value
        setSearchProduct(() => {
            if (valueName == '') {
                return [];
            }
            else {
                return product.filter(product => product.name.toLowerCase().includes(valueName.toLowerCase()))
            }
        })
        console.log(searchProduct)
    }

    return (


        <>
            <div className={cx('search')}>
                <input onFocus={() => setOpenBox(true)} onBlur={() => setOpenBox(false)} type="text" className={cx('input', 'w-100')} placeholder="The shirt you need..." onChange={(e) => getProduct(e)} />
                {openBox === true ? searchProduct.length > 0 ? <div className=''>{searchProduct.map(item => <div className={cx('d-flex','align-items-center')}><img src={item.img} style = {{width:'50px',height:'50px',borderRadius:'50%'}}></img><span>{item.name}</span></div>)}</div> : "" : ""}
                <MdSearch className={cx('icon', 'font-icon')} />
            </div>
        </>
    );
}

export default SearchBar;