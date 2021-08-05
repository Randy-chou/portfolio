import React from 'react';

function About() {
    const style = {
        photo: {
            width: "250px"
        }
    }

    return (
        <div className="container-md mt-5">
            <img className="mb-2" src="/portfolio/assets/images/self-photo-final-2.jpg" style={style.photo} alt="project"></img>
            <p>About Me</p>
            <p>I am an aspiring Fullstack Web developer from Cottonwood Heights Utah. I have a background in academic cell and molecular biology and fell in love with technology. I now wish to use the skills I learned in academia to bring the forefront of technology to the hands of everyday people. Contact me if there are any projects you want to collaborate on, or even if you need an extra set of hands.</p>
        </div>
    );
}

export default About;