import React from 'react';
//import { Link as LinkScroll } from 'react-scroll';
//import { Link as LinkRoute } from 'react-router-dom';
import { useHistory } from 'react-router';
import "./Home.css";
import NEWS from "../NEWS/News"
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar'

function Home() {

    const history = useHistory();

    return (
        <>

            <div className="home-container">
                <section className="headIMG">
                    <div>
                        <h id="header-name">CovidShare</h>
                        <p id="header-line"> HOLDING HANDS, STRIDING AHEAD</p>
                    </div>
                </section>

                <div className="navbar-container">
                    <Navbar />

                </div>

                <div className="main">
                    <NEWS />

                    <h2> ABOUT COVIDSHARE</h2>
                    <p id="About-desc">Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum </p>
                    <p>Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset Lorem Ipsum Dorset</p>
                    <ul>  <button id="Reg" onClick={() => history.push(`/student/register`)}>Register as <b>STUDENT</b></button> </ul>
                    <ul><button id="Reg" onClick={() => history.push(`/mentor/register`)}>Register as <b>MENTOR</b></button></ul>
                    <ul><button id="Reg" onClick={() => history.push(`/login`)}><b>LOGIN</b></button></ul>
                </div>
                <Footer/>

            </div>
        </>

    )

}

export default Home;