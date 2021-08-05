import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Project() {
    const [isFlipped, setFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setFlipped(!isFlipped);
    }

    const style = {
        card : {
            width: "300px",
            height: "400px",
            background: "#333333",
        },
        back : {
            width: "300px",
            height: "400px",
            background: "#1f1f1f",
            boxShadow: "inset 0 0 10px #000000"
        },
    }

    return (
        <section style={style.back}>
            <ReactCardFlip isFlipped={isFlipped}>
                <div style={style.card}>
                    front
                    <img src={window.location.origin + '/portfolio/assets/images/blog.png'} alt="project"></img>
                    <button onClick={handleClick}>Click to flip</button>
                </div>

                <div style={style.card}>
                    back
                    <button onClick={handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip>
        </section>
    )
}

export default Project;