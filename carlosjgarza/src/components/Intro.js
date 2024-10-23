import React from 'react';
import "../styles/Intro.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Intro = () =>{
        const el = useRef(null);

        useEffect(() => {
            if (el.current) {
            const typed = new Typed(el.current, {
                strings: ["<span class='intro-name'> Welcome to my Website! I'm Carlos.</span>"],
                typeSpeed: 100,
                startDelay: 300,
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
            <div id="intro">
                <span ref={el} className="intro-title"></span>
                <div className='intro-subtitle'>text here</div>
                <div className='intro-desc'>text here</div>
                <a
                    href="mailto:cjulgarza@gmail.com"
                    className='intro-contact'
                >
                    <MailOutlineIcon style={{ fontSize: 30, color: 'navy'}} />
                    {" Say hi! "}
                </a>
            </div>
        );
}

export default Intro;
