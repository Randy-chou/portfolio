import React, {useState} from 'react';

function Contact() {
    const style = {
        info : {
            maxWidth: "550px",
        },
        form : {
            background: "#333333",
            maxWidth: "550px",
            fontSize: "19px",
            boxShadow: "8px 8px 16px 0px #1f1f1f"
        },
        textarea: {
            height: "170px"
        },
        a: {
            color: "#B08D57",
            fontSize: "18px"
        }
    }

    const validateEmail = (input) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input).toLowerCase());
    }

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName || !message) {
            if(!validateEmail(email)){
                setErrorEmail(true);
            }
            if(!userName){
                setErrorName(true);
            }
            if(!message){
                setErrorMessage(true);
            }
            return;
        }
        
        alert(`Hello ${userName}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setEmail('');
        setMessage('');
    };

    const handleFocus = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setErrorEmail(false);
        } else if (inputType === 'userName') {
            setErrorName(false);
        } else {
            setErrorMessage(false);
        }
    }

    const handleBlur = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            if(!validateEmail(email)){
                setErrorEmail(true);
            }
        } else if (inputType === 'userName') {
            if(!userName){
                setErrorName(true);
            }
        } else {
            if(!message){
                setErrorMessage(true);
            }
        }
    }

    return (
        <div className="mt-5">
            <section className="container p-4" style={style.info}>
                <p style={style.a}>Phone Number : 385-259-3665</p>
                <a href="mailto:Randychou2020@gmail.com" className="text-decoration-none" style={style.a}>
                    Randychou2020@gmail.com
                    <i className="fas fa-envelope ms-1"></i>
                </a>
            </section>
            <section className="container mb-5 p-4" style={style.form}>
                <h4 className="mb-2">Feel free to send a message my way!</h4>
                <form >
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            placeholder="Firstname Lastname"
                            value={userName}
                            onChange={handleInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <p>{errorName ? 'Please enter your name' : ''}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={handleInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <p>{errorEmail ? 'Invalid email try again?' : ''}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            type="textbox"
                            className="form-control"
                            name="message"
                            style={style.textarea}
                            placeholder="Whats on your mind?"
                            value={message}
                            onChange={handleInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></textarea>
                        <p>{errorMessage ? 'Please add a message to send' : ''}</p>
                    </div>
                    <button type="submit" className="btn" onClick={handleFormSubmit}>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;