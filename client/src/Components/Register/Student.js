import React, { Component } from 'react';
//import { Link as LinkScroll } from 'react-scroll';
//import { Link as LinkRoute } from 'react-router-dom';
import "./Register.css";
//import Footer from "./Components/Footer/Footer";
import NEWS from "../NEWS/News"

class Student extends Component {


    render() {
        return (
            <div className="Reg-container">
                <b>WHY REGISTER WITH US</b>

                <div className="main-reg">
                </div>


                <NEWS />


            </div>
        )
    }
}

export default Student;