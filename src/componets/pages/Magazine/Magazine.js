import React from 'react';
import classNames from 'classnames/bind';
import new1 from '../../../img/new1.jpeg';
import new2 from '../../../img/new2.jpeg';
import new3 from '../../../img/new3.jpeg';
import new4 from '../../../img/new4.png';
import new5 from '../../../img/new5.jpeg';
import new6 from '../../../img/new6.webp';
import new7 from '../../../img/new7.webp';
import styles from "./Magazine.module.css";
let cx = classNames.bind(styles);
function Magazine() {
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new1} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
            <h5>[Update 2022] The Secret to Coordinating Summer Men's Outfits in Streetwear Style</h5>
            <p>Written by: School 11.04.2022</p>
            <p>When walking on the street, how will men coordinate men's clothes? With what men's clothing and what men's fashion style?...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new2} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
          <h5>3 Types Of Socks/Socks Every Boy Must Have In His Wardrobe</h5>
          <p>Written by: School 08.04.2022</p>
          <p>If you don't want to be out of place in your outfit, then in addition to pants, shirt, shoes, leave a pair of socks...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new3} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
          <h5>7 Ways To Outfit With Wide Form T-Shirts For The Stylish Girl</h5>
          <p>Written by: School 05.04. 2022</p>
          <p>Wide form t-shirt is a fashion item that almost every girl owns at least a few. But you...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new4} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
            <h5>15 Ways To Outfit With Big Form T-shirts For Men Super Beautiful But Batman Play</h5>
            <p>Written by: School 01.04.2022</p>
            <p>Wide form t-shirt is always "honest" for all boys, of all different ages, and indispensable...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new5} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
            <h5>15 Ways To Outfit With Big Form T-shirts For Men Super Beautiful But Batman Play</h5>
            <p>Written by: School 01.04.2022</p>
            <p>Wide form t-shirt is always "honest" for all boys, of all different ages, and indispensable...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new6} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
            <h5>15 Ways To Outfit With Big Form T-shirts For Men Super Beautiful But Batman Play</h5>
            <p>Written by: School 01.04.2022</p>
            <p>Wide form t-shirt is always "honest" for all boys, of all different ages, and indispensable...</p>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-lg-3')}>
            <img src={new7} className={cx('w-100')}></img>
          </div>
          <div className={cx('col-lg-5')}>
            <h5>15 Ways To Outfit With Big Form T-shirts For Men Super Beautiful But Batman Play</h5>
            <p>Written by: School 01.04.2022</p>
            <p>Wide form t-shirt is always "honest" for all boys, of all different ages, and indispensable...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Magazine;