import React, { useState } from 'react';
import './Sale.css';

const Sale = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
      };

    return(

        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br/>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}/><br />
                <label htmlFor="email">E-mail:</label><br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}/><br/>
                <label htmlFor="subject">Issue:</label><br/>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}/><br/>
                <label htmlFor="message">Message:</label><br/>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}/><br/>
                    <br/>
                <input className='submit' type="submit" value="Send"/>
            </form>
        </div>
    );
}

export { Sale }