import React from 'react'
import classNames from 'classnames/bind';
import styles from './About.module.css';

let cx = classNames.bind(styles);

function About() {
  return (
    <div className='container'>
        <h3 className='mt-4'>Giới thiệu về TSUN</h3>
        <div className='row'>
        <div className={cx('col-lg-6','flex-end')}>
          <h6>The Shirt You Need - TSUN - Since 2022</h6>
            <img src='https://file.hstatic.net/1000321269/file/ban_sao_cua_hyuzl5jb-1-xwc5-hinh_concept-0_d956f4d207f946fc85be4258a8059dc8_grande.jpg
' className='w-50'/>
        </div>
        </div>
        
    </div>
  )
}

export default About