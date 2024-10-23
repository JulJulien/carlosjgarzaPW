import React from "react";
import "../styles/About.css";

class About extends React.Component{
    render(){
        const one = (
            <p>
                I am a Senior Undergraduate from the University of Texas at the Rio Grande Valley, pursuing Bachelor of Science in Computer Science! I am currently seeking a full-time position as a Software Developer. 
                Most of my education and experience has been in Software Development but I am also expanding into the field of Data Science and pursuing a Minor in Data Science and Buisness Analytics.
                In my free time I love coding in the Unity Game Engine in C#! Its a great way for me to incorporate coding practice and creativity.
            </p>


        );

        const two = (
            <p>
              When I’m not studying, I like to go to the gym and listen to music. I
              also watch a lot of movies and keep up with Formula 1.
            </p>
          );

        const tech_stack = [
            "Python",
            "Java",
            "React.js",
            "C++",
          ];

        return (
            <div id="about">
              <div className="section-header">
                <span className="section-title">about me</span>
              </div>
              <div className="about-content">
                <div className="about-description">
                  {one}
                  <p>Some languages I've been working with:</p>
                  <ul className="tech-stack">
                    {tech_stack.map((tech_item, i) => (
                      <li key={i}>{tech_item}</li>
                    ))}
                  </ul>
                  {two}
                </div>
                <div className="about-image">
                  <img src={"/assets/Cropped_CJG_Professional_Headshot.jpg"} alt="CarlosGarza" />
                </div>
              </div>
            </div>
          );
    }
}

export default About;