import axios from 'axios';
import { useState } from 'react';
import './Form.css';

export default function Form() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
   const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      middlename:'',
      phonenumber:'',
      email:'',
      organization:'',
      category:'',
      interest:'',
      certificate:'',
    });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        firstname: '',
        lastname: '',
        middlename:'',
        phonenumber:'',
        email:'',
        organization:'',
        category:'',
        interest:'',
        certificate:''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/mleyqqve',
      data: formData,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className='form-container'>
       <section className="header">
         <h1 className='Reg--title'>Registration Form</h1>
         <span className="sub-title">Kindly enter your details below to register </span>
       </section>
        <form onSubmit={handleOnSubmit}>
          <fieldset className="name--section">
            <legend>Enter your name</legend>
            <input
            type="text"
            placeholder='First name'
            name='firstname'
            onChange={handleOnChange}
            value={formData.firstname}
            required
            />
            <input
            type="text"
            placeholder='Middle name'
             name='middlename'
             onChange={handleOnChange}
             value={formData.middlename}
             required
             />
            <input
            type="text"
             placeholder='Last name'
             name='lastname' 
             onChange={handleOnChange}
             value={formData.lastname}
             required
             />
          </fieldset>
          <fieldset className="email--section">
            <legend>Enter your Email & Phone number</legend>
            <input
            type="text"
            placeholder='E-mail'
            name ='email'
            onChange={handleOnChange}
            value={formData.email}
            required
            />
            <input
            type="text"
            placeholder='Phone-number'
            name='phonenumber'
            onChange={handleOnChange}
            value={formData.phonenumber}
            required
            />
          </fieldset>
          <fieldset className="org--section">
            <legend>Which organization are you with?</legend>
            <input
            type="text"
            placeholder='Organization-name'
            name='organization'
            onChange={handleOnChange}
            value={formData.organization}
            required
            />
          </fieldset>
          <div className="selection">
             <div className="select--interest">
                <legend>Select Interest</legend>
                <select 
                onChange={handleOnChange}
                value={formData.interest}
                name='interest'
                required
                >
                  <option value="">--</option>
                  <option value="Digital Inclusivity">Digital Inclusivity</option>
                  <option value="Research & Innovation Journal">Research & Innovation Journal</option>
                  <option value="Remote Job Portal">Remote Job Portal</option>
                  <option value="E-library">E-library, Coding & Robotic Center</option>
                </select>
              </div>
            <div className="select--category">
              <legend>Select category</legend>
              <select
              aria-label="Default select example"
              onChange={handleOnChange}
              value={formData.category}
              name='category'
              required
              >
                <option value="">--</option>
                <option value="Govt. Official">Govt. Official</option>
                <option value="Private Enterprise">Private Enterprise</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>
          <div className="certificate--section">
            <div className="first--option">
              <label htmlFor="yes">Yes</label>
              <input
               type="radio"
               id="yes"
               name='certificate'
               value="yes"
               onChange={handleOnChange}
               checked={formData.certificate === "yes"}
               />
               
            </div>
            <div className="second--option">
             <label htmlFor="no">No</label>
             <input
              type="radio"
              id="no"
              name='certificate'
              value="no"
              onChange={handleOnChange}
              checked={formData.certificate === "no"}
              /> 
            </div>
          </div>
          <button
          className='submit--button'
          disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Secure my spot'
              : 'Submitted'
            : 'Submitting...'}</button>
        </form>
      </div>
  )
    
}