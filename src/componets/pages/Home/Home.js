import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Home.module.css';
import banner from '../../../img/banner.webp';
import b1 from '../../../img/b1.webp';
import b2 from '../../../img/b2.webp';
import b3 from '../../../img/b3.webp';
import Banner from './Components/Banner/Banner';
import New from './Components/NewProduct/New';
import Sale from './Components/Sale/Sale';
import axios from 'axios';
let cx = classNames.bind(styles);
function Home() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/products').then(res => setProducts(res.data))
  },[])
  return (
    <>
    {products.map(product =>{
      return(<>
          
        </>)
    })}
      <Banner />
      <New />
      <Sale />
    </>
  )
}

export default Home