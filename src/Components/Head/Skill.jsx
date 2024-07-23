import React from 'react'
import style from "../Main.module.css"

export default function Skill({src , desc}) {
    return (
        <div>
            <div className={style.skill}>
                <div className={style['skill-box']}>
                    <img src={src} alt="" />
                </div>
                <div className={style['skill-info']}><p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
