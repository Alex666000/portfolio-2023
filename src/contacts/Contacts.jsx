import React from 'react';
import s from './Contacts.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${commonContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                </form>
                <button type={'submit'} className={s.submitBtn}>Отправить</button>
            </div>
        </div>)
}





