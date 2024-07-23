import React from 'react'
import style from "../Main.module.css"
import Skill from './Skill'

export default function Skills() {
    const skills = [
            { key: "1", src: "c.png", desc: "C Language Programming" },
            { key: "2", src: "c++.png", desc: "C++ Software Development" },
            { key: "3", src: "html.png", desc: "HTML Structure Design" },
            { key: "4", src: "css.png", desc: "CSS Visual Styling" },
            { key: "6", src: "js1.png", desc: "JavaScript Interactive Coding" },
            { key: "5", src: "react.png", desc: "React UI Development" }, 
    ]
    return (
        <section className={style.skillSection}>
            <h2>Skills</h2>

            <div className={style.lines}></div>
            <div className={style.skills}>
                {skills.map((ele) => {
                    return <Skill key={ele.key} src={ele.src} desc={ele.desc}></Skill>
                })}
            </div>
        </section>
    )
}
