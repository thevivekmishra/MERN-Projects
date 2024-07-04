import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from "axios"
import { toast } from 'react-toastify';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Simulate an async action, such as sending the form data to a server
  //   setTimeout(() => {
  //     // Reset form fields
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //     setLoading(false);
  //     alert('Message sent successfully!');
  //   }, 2000);
  // };

  const sendMail = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const {data} = await axios.post("http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials:true,
          headers:{"Content-Type":"application/json"},
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    }
    catch(error){
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type='text'
            placeholder='Enter your message...'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type='submit'
          disabled={loading}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
          }}
        >
          {loading && <ClipLoader size={20} color='white' />}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
