import React from 'react';
import s from './Projects.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "../assets/image/todo.jpg";
import socialImage from "../assets/image/social.png";

const Projects = () => {
    // для каждого проекта свой - у на сбудет их 2
    const social = {
        backgroundImage: `url(${todoImage})`,
    };
    const todolist = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${commonContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={todolist} title={'Todolist'} description={'Sed how are you'}/>
                    <Project style={social} title={'Social network'} description={'lorem killed'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;