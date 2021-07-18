import React, { Component } from 'react';
import './Footer.css';
import { AiOutlineCopyright, AiOutlineWhatsApp, AiOutlineTwitter, AiFillFacebook, AiOutlineMail } from 'react-icons/ai'
class Footer extends Component {


    render() {
        return (
            <div className="footer-container">
                <div className="footer-flex">

                    <div className="footer-header"> About
                        <div className="contact-us-content">
                            COVID Support is
                            <p className="ul-footer"><AiOutlineCopyright/> 2021 SAVE. All Rights Reserved. </p>
                        </div>

                    </div>
                    <div className="footer-header">Quick Links
                        <a href="/" className='links-icon'>
                            Study Support
                        </a>
                        <a href="/" className='links-icon'>
                            Mentorship
                        </a>
                        <a href="/chat/public" className='links-icon'>
                        </a>
                        <a href="/login" className='links-icon'>
                            Mentor Login
                        </a>
                        <a href="https://cowin.org" className='links-icon'>
                            COWIN
                        </a>

                    </div>
                    <div className="footer-header">Share
                        <p id="email-logo" className='footer-icon'>
                            <AiOutlineMail />EMAIL A FRIEND
                        </p>
                        <p id="facebook-logo" className='footer-icon'>
                            <AiFillFacebook /> Facebook
                        </p>
                        <p id="twitter-logo" className='footer-icon'>
                            <AiOutlineTwitter />Twitter
                        </p>
                        <p id="whatsapp-logo" className='footer-icon'>
                            <AiOutlineWhatsApp />WhatsApp
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;