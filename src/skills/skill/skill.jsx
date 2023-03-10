import React from 'react';
import s from './skill.module.css';

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.skillDescription}>{props.description}</span>
        </div>
    )
};

export default Skill;