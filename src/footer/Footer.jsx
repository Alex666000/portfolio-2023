import React from 'react';
import s from './Footer.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${commonContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Александр Богданов</h2>
                <div  className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <span className={s.copyright}>Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;