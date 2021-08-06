import React from 'react';
import picture from '../../assets/images/self-photo-final-2.jpg';

function About() {
    const style = {
        photo: {
            width: "250px",
            borderRadius: "100px",
        }
    }

    return (
        <div className="container-md mt-5 d-flex flex-column align-items-center flex-lg-row">
            <img className="mb-4 me-4" src={picture} style={style.photo} alt="project"></img>
            <article className="p-3 px-5">
                <h1 className="mb-3 ms-2">About Me</h1>
                <p>I am an aspiring Fullstack Web developer from Cottonwood Heights Utah. I have a background in academic cell and molecular biology and fell in love with technology. I now wish to use the skills I learned in academia to bring the forefront of technology to the hands of everyday people. Contact me if there are any projects you want to collaborate on, or even if you need an extra set of hands.</p>
            </article>
        </div>
    );
}

export default About;