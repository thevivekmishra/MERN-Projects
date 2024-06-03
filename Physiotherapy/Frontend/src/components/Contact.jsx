import React from "react";
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {
    //web3forms
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4abed419-c15e-4064-bbdb-e8daac3fbc8b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Message sent successfully! Thank you for your input! We'll get back to you shortly.");
        }
    };

    const handleCheckDistance = () => {
        window.open("https://maps.app.goo.gl/DXw33FAXHL55Xass8", "_blank");
    };

    return (
        <div id="contact" className="contact flex flex-col justify-center items-center gap-16 pt-10 mb-16 w-full max-w-7xl mx-auto px-4">
            <div className="contact-title text-center mt-12">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Get In Touch</h1>
            </div>

            <div className="contact-section flex flex-col lg:flex-row gap-10 w-full">
                <div className="contact-left flex flex-col gap-6 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-pink-500">Let's Talk</h1>
                    <p className="text-lg text-justify text-gray-700 dark:text-gray-300">
                    We understand that every patient is unique, and we're committed to providing personalized care tailored to your specific needs. If you have any questions or would like to schedule an appointment, please don't hesitate to reach out to us.
                    </p>
                    <p className="text-lg text-justify text-gray-700 dark:text-gray-300">
                        Feel free to drop me a message using the form, and I'll get back to you as soon as possible.
                    </p>
                    <div className="contact-details flex flex-col gap-6">
                        <div className="contact-detail flex items-center gap-3">
                            <img src={mail_icon} alt="Email" className="w-6 h-6"/>
                            <p className="text-lg text-gray-800 dark:text-gray-300">xyz@gmail.com</p>
                        </div>

                        <div className="contact-detail flex items-center gap-3">
                            <img src={call_icon} alt="Phone" className="w-6 h-6"/>
                            <p className="text-lg text-gray-800 dark:text-gray-300">123456789</p>
                        </div>

                        <div className="contact-detail flex items-center gap-3">
                            <img src={location_icon} alt="Location" className="w-6 h-6"/>
                            <p className="text-lg text-gray-800 dark:text-gray-300">Daroga ji gali robertsganj sonebhadra</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-4 lg:w-1/2">
                    <label className="text-xl font-semibold text-gray-800 dark:text-white" htmlFor="name">Your Name</label>
                    <input className="input border border-gray-300 dark:border-gray-700 w-full h-12 rounded-lg px-4 text-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter your name" name='name' required />
                    
                    <label className="text-xl font-semibold text-gray-800 dark:text-white" htmlFor="email">Your Email</label>
                    <input className="input border border-gray-300 dark:border-gray-700 w-full h-12 rounded-lg px-4 text-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="email" placeholder="Enter your email" name='email' required />
                    
                    <label className="text-xl font-semibold text-gray-800 dark:text-white" htmlFor="message">Write your message here</label>
                    <textarea className="input border border-gray-300 dark:border-gray-700 w-full h-[250px] rounded-lg px-4 py-2 text-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" name='message' rows='6' placeholder="Enter your message" required />
                    
                    <button type="submit" className="bg-pink-400 hover:bg-pink-500 text-black font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">Submit Now</button>
                </form>
            </div>     
            <div className="contact-distance mt-10 flex flex-col items-center">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Check Distance</h1>
    <button onClick={handleCheckDistance} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Check Distance on Google Maps</button>
</div>

            <div className="w-full mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2155.501423117684!2d83.06511443074314!3d24.688853764688762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef932d3caeee5%3A0x9cd457f17bf1d722!2sSushima%20Physiotherapy%20%26%20Chiropractic%20TherapyCenter!5e0!3m2!1sen!2sin!4v1717425323913!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;