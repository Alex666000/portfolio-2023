import React from 'react';
import s from './Main.module.css';
import comMonContainer from '../common/styles/commonContainer.module.css';

const Main = () => {
    return (
        <div className={s.main}>
            <div className={comMonContainer.container}>
                <div className={s.description}>
                    <span>Привет!</span>
                    <h1>Меня зовут Александр</h1>
                    <p>Я фронтенд разработчик</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
};

export default Main;