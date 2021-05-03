import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {

    const [email, setEmail] = useState(false);

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6v7vgrw', 'template_sjiz1ci', e.target, 'user_pFdMTqasHCdyMKEK0zDSl')
        .then((result) => {
            console.log(result.text);
            setEmail(true);
        }, (error) => {
            console.log(error.text);
            
        });
        e.target.reset();
    }
    return (


        <section className="contact mt-5 pt-5">
        <div className="container">
            <div className="section-header text-center text-white">
                 <h1 className="text-primary">Contact</h1>
                 <h3>Always Connect With Me</h3>
            </div>
            <div className="col-md-9 mx-auto">
                <form onSubmit={sendMail}>
                <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name " name='name'/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address " name='email'/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject " name='subject'/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message " name='message'></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary px-4 py-2"> Submit </button>
                    </div>

                    <div>
                        
                            {
                                email && <p className="text-white text-center">Submitted Successfully!</p>
                            }
                        
                    </div>

                </form>
            </div>
        </div>
    </section>












        // <div>
        //     <div id="form" className="mt-5" style={{backgroundColor:'red'}}>
        //     <div className="form-holder">
        //     <form action="">
        //     <input type="text" placeholder="Your Name" />
		// 	<input type="text" placeholder="Email Address" />
        //     <textarea placeholder="Your Message" rows="10" cols="40" />
		// 	<button type="submit">Send</button>
		//     </form>
        //     </div>
        // </div>
        // </div>
    );
};

export default Contact;