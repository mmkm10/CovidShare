import React from 'react'
import {useHistory} from 'react-router'
import Navbar from '../Navbar/Navbar'
import NEWS from '../NEWS/News'

import './Register.css'
export default function Login() {
    const history = useHistory();
    return (
        <>
            <Navbar />
            <div className="main-container">
                <h2>WHY REGISTER WITH US</h2>
                <p id="About-desc">Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum </p>
            </div>
            <NEWS />
            <section className="login-box">
                <h3>LOGIN</h3>
                <div >
                    <input className="form" type="text" placeholder="EMAIL" />
                    <input className="form" type="password" placeholder="PASSWORD (min. 6 characters)" />
                    <button className="sub" type="submit" onClick={() =>history.push('./chat/public')}>SUBMIT</button>
                </div>
                <div className="below">
                    <p>Not a member</p>
                    <a id="reg-desc" href="/student/register"> REGISTER AS STUDENT</a>
                    <p>Register as a Mentor</p>
                    <a id="reg-desc" href="/mentor/register">MENTOR REGISTER</a>
                    <button id="forgot"> FORGOT PASSWORD</button>
                </div>
            

            </section>

        </>
    )
}
