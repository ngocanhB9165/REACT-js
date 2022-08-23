import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './sale.module.css';
import axios from 'axios';
let cx = classNames.bind(styles);
function Sale() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/products').then(res => setProducts(res.data))
  }, [])
  return (
    <>
      <div className={cx('text-center','pt-5')}>
        <h1 className={cx('color')}>Sale</h1>
        <p>Every week TSUN has a new product</p>
      </div>
            <div className={cx('container')}>
              <div className={cx('row')}>
      {products.map(product => {
        return (
          <>

                <div className={cx('col-lg-3', 'col-md-6', 'col-sm-3', 'p-3')} >
                  <div className="card" >
                    <img className="card-img-top" src={product.img} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title text-center">{product.name}</h5>
                    </div>
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
    </>

  )
}

export default Sale