import React from 'react';
import s from './Hire.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';


const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${commonContainer.container} ${s.hireContainer}`}>
                <h2 className={s.title}>I am available for Freelance</h2>
                <a href="" className={s.hireBtn}>Нанять меня</a>

            </div>

        </div>
    );
};

export default Hire;