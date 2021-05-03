import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
    
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_k0crfja', 'template_vprlj58', e.target, 'user_rRzCWZvnfhbTBG6ZimR7w')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Your message send successfully')
          e.target.reset()
      }

    return (
        <section id="contact">
            <div className="title ml-5 pl-5">
                <h3 className="mb-4">GET IN TOUCH</h3>
            </div>
            <div className="row pb-5">
                <div className="col-md-6 offset-md-3 form-box">
                    <form className="form pt-5" name="enq" onSubmit={sendEmail} method="post" >
                        <div class="row">
                            <div class="form-group col-md-4">
                                <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Enter name" required="required"/>
                            </div>
                            <div class="form-group col-md-4">
                                <input type="email" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter email" required="required"/>
                            </div>
                            <div class="form-group col-md-4">
                                <input type="subject" class="form-control" name="subject" id="subject" aria-describedby="subject" placeholder="Subject" required="required"/>
                            </div>
                            <div class="form-group col-md-12"><grammarly-extension data-grammarly-shadow-root="true" class="cGcvT"></grammarly-extension>
                                <textarea rows="6" name="message" class="form-control" id="message" aria-describedby="message" placeholder="Write your message" required="required" spellcheck="false"></textarea>
                            </div>
                            <div class="col-md-12 text-center">
                                <button type="submit" value="Send" className="submit-btn py-2 w-100 mt-3">Submit</button>
                            </div>
                        </div>
                    </form>
                    {/* <form className="py-4 px-3 text-white" onSubmit={sendEmail} method="post">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Enter name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea rows="5" name="message" class="form-control" id="message" aria-describedby="message" placeholder="Write your message"></textarea>
                        </div>                        
                        <button type="submit" class="submit-btn py-2 w-100 mt-3">Submit</button>
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;