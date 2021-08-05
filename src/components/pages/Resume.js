import React from 'react';

function Resume() {
    const style = {
        resume: {
            fontSize: "20px",
            color: "#B08D57",
        }
    }

    return (
        <div className="container-sm mt-5">
            <h3>Skills</h3>
            <p>Languages: JavaScript, CSS3, HTML5, Java, Python, R, SQL</p>
            <p>Applications: GitHub, Adobe Illustrator, MySQL Workshop</p>
            <p>Tools: Bootstrap, jQuery, MySQL, AJAX, Node.js, Express.js, Visual Studio, MongoDB, ReactJS, Firebase</p>
            <a className="text-decoration-none hoverable" style={style.resume} href="/portfolio/assets/other/Resume_Randy.pdf">Resume Link!</a>
        </div>
    );
}

export default Resume;