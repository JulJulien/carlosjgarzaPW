import React from "react";
import "../styles/About.css";

class About extends React.Component{
    render(){
        const one = (
            <p>
                I am a senior undergraduate at the University of Texas Rio Grande Valley, pursuing a Bachelor of Science in Computer Science. Currently, I am seeking an internship or a full-time Software Developer position. While most of my education and experience have focused on software development, I am also expanding into the field of data science and pursuing a minor in Data Science and Business Analytics.
               
            </p>
        );

        const two = (
            <p>
               In my free time, I enjoy coding in the Unity game engine using C#. It's a great way to blend coding practice with creativity!
            </p>
          );

        const tech_stack = [
            "C#",
            "JavaScript",
            "React.js",
            "C++",
            "Python"
          ];

        return (
            <div id="about">
              <div className="section-header">
                <span className="section-title">About Me</span>
              </div>
              <div className="about-content">
                <div className="about-description">
                  {one}
                  {two}
                  <p>Some languages I've been working with:</p>
                  <ul className="tech-stack">
                    {tech_stack.map((tech_item, i) => (
                      <li key={i}>{tech_item}</li>
                    ))}
                  </ul>
                  
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