import { useForm } from '@formspree/react';
import { useState } from 'react';
import './Form.css';

  export default function Form() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      otherName:'',
      phoneNumber:'',
      email:'',
      organization:'',
      category:'',
      interest:'',
      certificate:'',
      exhibition:'',
    });
    const [state, handleSubmit] = useForm("moqgaelb");

    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  
    return (
      <div className='form-container'>
       <section className="header">
         <h1 className='title'>Registration Form</h1>
         <span className="sub-title">Kindly enter your details below to register </span>
       </section>
        <form onSubmit={handleSubmit}>
          <fieldset className="name--section">
            <legend>Enter your name</legend>
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Middle name'/>
            <input type="text"  placeholder='Last name'/>
          </fieldset>
          <fieldset className="email--section">
            <legend>Enter your Email & Phone number</legend>
            <input type="text" placeholder='E-mail'/>
            <input type="text" placeholder='Phone number'/>
          </fieldset>
          <fieldset className="org--section">
            <legend>Which organization are you with?</legend>
            <input type="text" placeholder='Organization-name'/>
          </fieldset>
          <div className="selection">
             <div className="select--interest">
                <legend>Select Interest</legend>
                <select  onChange={handleChange}>
                  <option value="">--</option>
                  <option value="1">Digital Inclusivity</option>
                  <option value="2">Research & Innovation Journal</option>
                  <option value="3">Remote Job Portal</option>
                  <option value="4">E-library, Coding & Robotic Center</option>
                </select>
              </div>
            <div className="select--category">
              <legend>Select category</legend>
              <select
              aria-label="Default select example" onChange={handleChange}>
                <option value="">--</option>
                <option value="1">Govt. Official</option>
                <option value="2">Private Enterprise</option>
                <option value="3">Business Owner</option>
                <option value="4">Lecturer</option>
                <option value="5">Student</option>
              </select>
            </div>
          </div>
          <div className="certificate--section">
            <div className="first--option">
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="yes" name='pick'/>
            </div>
            <div className="second--option">
             <label htmlFor="no">No</label>
             <input type="radio" id="no" name='pick'/> 
            </div>
          </div>
          <button onSubmit={handleSubmit} className='submit--button'>Secure my spot</button>
        </form>
      </div>
    );
  }