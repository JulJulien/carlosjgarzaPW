import React from 'react';
import "../styles/Intro.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "../styles/Global.css";


const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                
                strings: ["Carlos Garza :D"], // Text to type
                typeSpeed: 200,
                startDelay: 600,
                showCursor: true,
                cursorChar: "|",
                contentType: 'html',
            });
            
            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <div id="intro" style={{ fontWeight: 'bold', fontFamily: 'Raleway' }}>
            <h1 className="intro-title">Welcome to my Website !!! I'm</h1>
            <span ref={el} className="intro-name" style={{ color: 'var(--myblue)' }}></span> {/* Typing animation */}
            <div className='intro-subtitle'></div>
            <div className='intro-desc'></div>
            <a href="mailto:cjulgarza@gmail.com" className='intro-contact'>
                <MailOutlineIcon style={{ fontSize: 30, color: 'navy'}} />
                {" Say hi! "}
            </a>
        </div>
    );
}

export default Intro;