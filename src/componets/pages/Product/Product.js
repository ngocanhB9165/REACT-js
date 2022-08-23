import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

import SweetPagination from "sweetpagination";


let cx = classNames.bind(styles);

function Product() {
  const [products, setProducts] = useState([])
  const [currentPageData, setCurrentPageData] = useState(products);
  const [filterCate, setFilterCate] = useState('')
  const [filterPrice, setFilterPrice] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8000/products').then(res => setProducts(res.data))
  }, [])
  function getFilter(e) {
    if (e.target.value === "hat") {
      setFilterCate('category_id=3')
    }
    if (e.target.value === "pants") {
      setFilterCate('category_id=2')
    }
    if (e.target.value === "tee") {
      setFilterCate('category_id=1')
    }
    if (e.target.value === "bag") {
      setFilterCate('category_id=4')
    }
    if (e.target.value === "") {
      setFilterCate('')
    }

    if (e.target.value === "highest") {
      setFilterPrice('_sort=discount&_order=desc')
    }
    if (e.target.value === "lowest") {
      setFilterPrice('_sort=discount&_order=asc')
    }
    if (e.target.value === "1") {
      setFilterPrice('')
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/products?${filterCate}&${filterPrice}`).then(res => setProducts(res.data))
    console.info(filterPrice)
  }, [filterCate, filterPrice])
  return (
    <>
      <div>
        <img src='https://file.hstatic.net/1000321269/file/banner-03_80e3afde04744962be48be2279c4fed4.jpg' className='w-100'></img>
      </div>
      <div className={cx('container', 'pt-5')}>
        <div className={cx('row')}>
          <div className='col-lg-4'>
            <select onChange={e => getFilter(e)}>
              <option value="">Filter Categories</option>
              <option value="hat">Hat</option>
              <option value="pants">Pants</option>
              <option value="tee">Tee</option>
              <option value="bag">Bag</option>
            </select>
          </div>
          <div className='col-lg-4'>
            <div className={cx('text-center')}>
              <h1 className={cx('color')}>ALL PRODUCT</h1>
              <p>Every week TSUN has a new product</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <select onChange={e => getFilter(e)} >
              <option value='1'>Filter Price</option>
              <option value='highest'>Highest Price</option>
              <option value='lowest'>Lowest Price</option>
            </select>
          </div>
        </div>
      </div>


      <div className={cx('container')}>
        <div className={cx('row')}>
          {currentPageData.map(product => {
            return (
              <>

                <div className={cx('col-lg-3', 'col-md-6', 'col-sm-3', 'p-3')} >
                  <div className="card" >
                    <Link to={`/detail/${product.id}`}><img className="card-img-top" src={product.img} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title text-center">{product.name}</h5>
                      </div></Link>
                    <div className="card-footer">
                      <span class="">
                        <del ng-if="item.cost > item.discount" class="px-1">{product.price}</del>
                        <span class="font-weight-bold">{product.discount}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </>

            )
          })}
        </div>
      </div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={products}
        dataPerPage={8}
        navigation={true}
        getStyle={'style-1'}
      />
    </>

  )
}

export default Product;