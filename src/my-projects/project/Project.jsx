import React from 'react';
import s from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <a className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    )

};

export default Project;