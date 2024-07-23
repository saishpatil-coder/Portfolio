import React from 'react'
import style from "../Main.module.css"
import Skills from './Skills'

export default function Profile() {
    return (
        <>
            <main>
                <div className={`${style.head} ${style.flex}`}>
                    <div className={`${style.info} ${style.flex}`}>
                        <div className={style.left}>
                            <h2>Hey,</h2>
                            <h3>I'm <span className={style.myName} >Saish Sachin Patil</span></h3>
                            <h5>Enthusiast web developer </h5>
                        </div>
                    </div>
                    <div className={`${style.right} ${style.flex}`}>
                        <div className={style.profileImage}>
                            <img src="profile.jpg" alt="Hello" />
                        </div>
                    </div>
                </div>
                <hr />
            </main>
            <Skills></Skills>
        </>
    )
}
