import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="formContainer">
            <div className="form-holder">
            <form action="">
            <input type="text" placeholder="Your Name" />
			<input type="text" placeholder="Email Address" />
            <textarea placeholder="Your Message" rows="10" cols="40" />
			<button type="submit">Send</button>
		</form>
        </div>
        </div>
    );
};

export default Contact;