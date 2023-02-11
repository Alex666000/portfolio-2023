import React from 'react';
import s from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <a className={s.viewBtn}>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )

};

export default Project;