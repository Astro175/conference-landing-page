import { useState } from 'react';
import './Form.css';

  export default function Form() {
    const [formData, setFormData] = useState({
      surName: '',
      firstName: '',
      otherName:'',
      email:'',
      organization:'',
      category:'',
      interest:'',
      certificate:'',
      exhibition:'',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    return (
      <>
        <div
        style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(255, 255, 255, 1.0)',
      }}
      >
        <div className="top-reg">
        <h3>Registration Form</h3>
        </div>
        <form className="form-floating" onSubmit={handleSubmit}>
          <div className='container'>
            <div className="form-floating mb-3">
              <label htmlFor="floatingInput">Surname</label>
              <input type="text" className="form-control" id="floatingInput" placeholder="Surname" value={formData.surName}
              onChange={handleChange}/>
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">First name</label>
              <input type="text" value={formData.firstName} onChange={handleChange} placeholder='first name'/>
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingInput">Middle name</label>
              <input type="text" value={formData.otherName} onChange={handleChange} placeholder='Middle name'/>
              
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingInput">Phone Number</label>
              <input type="text" className="form-control" id="floatingInput" placeholder="Phone Number" value={formData.otherName}
              onChange={handleChange}/>
              
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingInput">Email</label>
              <input type="text"  placeholder="name@example.com" value={formData.email}
              onChange={handleChange}/>
              
            </div>
            <div className="form-floating mb-3">
               <label htmlFor="floatingInput">Organization</label>
              <input type="text" placeholder="Organization" value={formData.surName}
              onChange={handleChange}/>
             
            </div>
            <div className="form-floating mb-3">
              <select className="form-select-sm" aria-label="Default select example" onChange={handleChange}>
                <option selected>Select category</option>
                <option value="1">Govt. Official</option>
                <option value="2">Private Enterprise</option>
                <option value="3">Business Owner</option>
                <option value="4">Lecturer</option>
                <option value="5">Student</option>
              </select>
              <select className="form-select-sm" onChange={handleChange}>
                <option selected>Select interest</option>
                <option value="1">Digital Inclusivity</option>
                <option value="2">Research & Innovation Journal</option>
                <option value="3">Remote Job Portal</option>
                <option value="4">E-library, Coding & Robotic Center</option>
              </select>
              <p>Do you need a certificate?
                <select className="form-select-sm" onChange={handleChange}> 
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </p>
            </div>
            <button>Register</button>
          </div>
        </form>
      </div>  
      </>
    );
  }