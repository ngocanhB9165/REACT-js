import classNames from 'classnames/bind';
import styles from "./Header.module.css";
import SearchBar from '../SearchBar/index'
import logo from '../../../img/logo.webp';
import { FaUserCircle } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
let cx = classNames.bind(styles);
function Header() {
    return (<>
        <div className={cx('container-fluid', 'bg-top')}>
            <div className={cx("row", "head-top", "justify-content-around", 'align-items-center', 'p-1')}>
                <div className={cx('col-lg-3', 'col-md-3', 'col-sm-12', 'head-left')}>
                    <div className={cx("d-flex", 'align-items-center')}>
                        <p className={cx('d-inline-block', 'p-0', 'm-0', 'text-center')}>TSUN@GMAIL.COM</p>
                        <p className={cx('d-inline-block', 'p-0', 'm-0', 'text-center')}><span>|</span> Hotline: <Link to="">0359 843 253</Link></p>
                    </div>
                </div>
                <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12', 'head-center')}>
                    <div className={cx('text-center')}>
                        <p className={cx('mb-0')}>Get 1 free Tote Bag when buying products from 300,000 VND</p>
                        <p className={cx('mb-0')}>Freeship for bill from 1,500,000 VND</p>
                    </div>
                </div>
                <div className={cx('col-lg-3', 'col-md-2', 'col-sm-12', 'head-right')}>
                    <SearchBar/>
                </div>

            </div>
            <div className={cx('row', 'justify-content-around', 'align-items-center', 'pt-3', 'pb-3', 'bg-white')}>
                <div className={cx('col-lg-2', 'col-md-2', 'col-sm-12', 'head-bottom')}>
                    <div className={cx('logo')}>
                        <img src={logo}></img>
                    </div>
                </div>
                <div className={cx('col-lg-5', 'col-md-5', 'col-sm-12', 'menu')}>
                    <div className={cx('navb')}>
                        <ul className={cx('nav', 'justify-content-center')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/magazine" className="nav-link">Magazine</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/outline" className="nav-link ">Outline</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link ">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-12'>
                   <Link to='/login'> <FaUserCircle/> </Link> 
                   <Link to='/cart'> <FaCartArrowDown /> </Link> 
                </div>
            </div>
        </div>
    </>);
}

export default Header;