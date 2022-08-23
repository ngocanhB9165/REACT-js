import classNames from 'classnames/bind';
import styles from './sidebar.module.css';
import banner from '../../../../../img/banner.webp';
import b1 from '../../../../../img/b1.webp';
import b2 from '../../../../../img/b2.webp';
import b3 from '../../../../../img/b3.webp';
let cx = classNames.bind(styles);
function SideBar() {
    return (
        <>
            <div className={cx('banner','mb-5','pb-5')}>
                <img className={cx('w-100')} src={banner} ></img>
                <div className={cx('banner-bottom', 'd-flex', 'justify-content-between')}>
                    <img className={cx('w-32')} src={b1} />
                    <img className={cx('w-32')} src={b2} />
                    <img className={cx('w-32')} src={b3} />
                </div>
            </div>
        </>
    );
}

export default SideBar;