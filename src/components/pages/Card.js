import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Card({key,title,imglink,gitlink,deploy,desc,tech}) {
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
        img : {
            width: "280px",
            maxHeight: "400px",
            background: "#1f1f1f",
            boxShadow: "inset 0 0 10px #000000"
        },
    }

    return (
        <section style={style.back} key = {key}>
            <ReactCardFlip isFlipped={isFlipped}>
                <div className="d-flex flex-column align-items-center p-2" style={style.card}>
                    <p className="mb-1">{title}</p>
                    <img className="flex-fill mb-2" style={style.img} src={imglink} alt="project"></img>
                    <button className="w-100" onClick={handleClick}>Click to flip</button>
                </div>

                <div className="d-flex flex-column justify-content-between p-2" style={style.card}>
                    <div>
                        <p>Desc: {desc}</p>
                        <p>Tech: {tech}</p>
                    </div>
                    <div>
                        <div className="d-flex justify-content-around mb-3">
                            {deploy ? <a href={deploy} target="_blank" rel="noreferrer">deploy</a> : ""}
                            <a href={gitlink} target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                        <button className="w-100" onClick={handleClick}>Click to flip</button>
                    </div>

                </div>
            </ReactCardFlip>
        </section>
    )
}

export default Card;