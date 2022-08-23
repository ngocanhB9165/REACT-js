import styles from "./footer.modult.css";
import classNames from 'classnames/bind';
import logobottom from '../../../img/logo-bottom.webp';
import tsun2 from '../../../img/tsun2.png';
import { FcHome } from 'react-icons/fc';
let cx = classNames.bind(styles);
function Footer() {
    return (<>
        <div className={cx('footer', 'mt-5', 'pt-5', 'bg-bottom')}>
            <div className={cx('container', 'ml-0')}>
                <div className={cx('row', 'justify-content-between', 'text-white')}>
                    <div className={cx('col-lg-4 col-md-4 col-sm-12')}>
                        <h4>Introduce</h4>
                        <p>tsunsg The Shirt You Need - TSUN was established in 2016, all TSUN products are
                            design edand manufactured by ourselves based on quality criteria. All TSUN products are
                            copyrighted by TSUN </p>
                        <img className={cx('w-50')} src={logobottom} />
                    </div>
                    <div className={cx('col-lg-1 col-md-1 col-sm-12')}>
                        <h4>Link</h4>
                        <ul className={cx('list-unstyled')}>
                            <li>Home</li>
                            <li>Product</li>
                            <li>OUTLET</li>
                            <li>Guide</li>
                            <li>Size Table</li>
                            <li>About TSUN</li>
                            <li>NEWS</li>
                        </ul>
                    </div>
                    <div className={cx('col-lg-3 col-md-3 col-sm-12')}>
                        <h4>Contact information</h4>
                        <ul className="list-unstyled">
                            <li><a><FcHome /></a>HCM| 350 Điện Biên Phủ,Q.Bình Thạnh.----------------------------------</li>
                            <li><a><FcHome /></a>HCM| 136 Nguyễn Hồng Đào, P14, Q. Tân Bình------------------------------</li>
                            <li><a><FcHome /></a>BiênHoà| 43 Dương Tử Giang, Tân Tiến.------------------------------------</li>
                            <li><a><FcHome /></a>HCM| 350 Điện Biên Phủ,Q.Bình Thạnh.----------------------------------</li>
                            <li><a><FcHome /></a>HCM| 136 Nguyễn Hồng Đào, P14, Q. Tân Bình------------------------------</li>
                            <li><a><FcHome /></a>BiênHoà| 43 Dương Tử Giang, Tân Tiến.------------------------------------</li>
                        </ul>
                    </div>
                    <div className={cx('col-lg-2')}>
                        <h4>Fanpage</h4>
                        <img className={cx('w-75')} src={tsun2}></img>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom', 'text-white')}>
                <p className={cx('text-center', 'p-3')}>Copyright © 2022 tsunsg. Powered by Haravan</p>
            </div>
        </div>
    </>);
}

export default Footer;