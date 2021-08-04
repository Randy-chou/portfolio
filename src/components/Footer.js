import React from 'react';

function Footer() {
    let style = {
        background: {
            background: "#1f1f1f",
            heightMin: "100px"
        },
        a: {
            color: "#A97142",
            fontSize: "20px"
        }
    }

    return (
        <section className="conatiner-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center" style={style.background}>
            <a href="https://github.com/Randy-chou" target="_blank" rel="noreferrer" className ="text-decoration-none p-3" style={style.a}>
                Github
                <i className="fab fa-github ps-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/randy-chou-6a8217133/" target="_blank" rel="noreferrer" className ="text-decoration-none p-3" style={style.a}>
                LinkedIn 
                <i className="fab fa-linkedin ps-1"></i>
            </a>
            <a href="https://stackoverflow.com/users/15749690/randy-chou" target="_blank" rel="noreferrer" className ="text-decoration-none p-3" style={style.a}>
                StackOverflow 
                <i className="fab fa-stack-overflow ps-1"></i>
            </a>
        </section>
    );
}

export default Footer;