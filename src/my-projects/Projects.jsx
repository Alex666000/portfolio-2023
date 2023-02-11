import React from 'react';
import s from './Projects.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${commonContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Social network'} description={'lorem killed'}/>
                    <Project title={'Todolist'} description={'Sed how are you'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;