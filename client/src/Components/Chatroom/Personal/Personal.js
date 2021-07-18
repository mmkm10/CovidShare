import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NEWS from '../../NEWS/News'
import './Public.css'

export default function Personal() {
    return (
        <>
            <Navbar />
            <div className="news-public">
                <NEWS />
            </div>
            <div className="main-chat">
            </div>

        </>

    )
}
