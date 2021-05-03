import React from 'react';
import './Contact.css';

const Contact = () => {
    return (


        <section className="contact mt-5 pt-5">
        <div className="container">
            <div className="section-header text-center text-white">
                 <h1 className="text-primary">Contact</h1>
                 <h3>Always Connect With Me</h3>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name "/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address "/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Phone Number "/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message "></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-primary px-4 py-2"> Submit </button>
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