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
            <article className="mb-4">
                <h3 className="ms-2 mb-3">Skills</h3>
                <p className="mb-2">Languages: JavaScript, CSS3, HTML5, Java, Python, R, SQL</p>
                <p className="mb-2">Applications: GitHub, Adobe Illustrator, MySQL Workshop</p>
                <p className="mb-2">Tools: Bootstrap, jQuery, MySQL, AJAX, Node.js, Express.js, Visual Studio, MongoDB, ReactJS, Firebase</p>
            </article>
            <a className="text-decoration-none hoverable" style={style.resume} href="/portfolio/assets/other/Resume_Randy.pdf" target="_blank" rel="noreferrer">
                Resume Link!
                <i className="fas fa-external-link-alt"></i>
            </a>
        </div>
    );
}

export default Resume;