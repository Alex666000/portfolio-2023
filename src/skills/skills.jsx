import React from 'react';
import s from './skills.module.css';
import comMonContainer from '../common/styles/commonContainer.module.css';
import Skill from "./skill/skill";

const Skills = (props) => {
    return (
        <div className={s.skills}>
            <div className={`${comMonContainer.container} ${s.container}`}>
                <h2>Мои навыки</h2>
                <div className={s.mySkills}>
                    <Skill title={'JS'} description={' Прнивет Прнивет Прнивет Прнивет Прнивет'}/>
                    <Skill title={'CSS'} description={' xxxx Прнивет Прнивет Прнивет Прнивет'}/>
                    <Skill title={'React'} description={' rrrrr Прнивет Прнивет Прнивет Прнивет'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;