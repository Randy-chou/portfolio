import React from 'react';

function Contact() {
    return (
        <div>
            <p>Form To contact me!, Address and email information</p>
            <a href="mailto:Randychou2020@gmail.com" className ="text-decoration-none">
                Randychou2020@gmail.com 
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    );
}

export default Contact;