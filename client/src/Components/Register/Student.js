import React from 'react'
import Navbar from '../Navbar/Navbar'
import NEWS from '../NEWS/News'

import './Register.css'
export default function Login() {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <h2>WHY JOIN US AS A MENTOR</h2>
                <p id="About-desc">Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum </p>
            </div>
            <NEWS />
            <section className="mentor-box">
                <div id="title-mentor">CREATE
                    <h3>STUDENT</h3>
                    ACCOUNT</div>

                <div >
                    <input className="form" type="text" placeholder="FIRST NAME" />
                    <input className="form" type="text" placeholder="LAST NAME" />
                
                    <input className="form" type="text" placeholder="EMAIL" />
                    <input className="form" type="password" placeholder="PASSWORD " />
                    <button className="sub" type="submit">SUBMIT</button>
                </div>
                <div className="below">
                    <p>Already a member</p>
                    <a id="reg-desc" href="/login"> LOGIN</a>
                    <p>Register as member</p>
                    <a id="reg-desc" href="/mentor/register"> MENTOR REGISTER</a>
               
                </div>


            </section>

        </>
    )
}
