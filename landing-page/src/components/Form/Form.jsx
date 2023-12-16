import { useState } from 'react';
import './App.css';

  function App() {
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
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // You can send the data to a server or perform other actions
    };
  
    return (
      <>
        <div
        style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/form-bg.jpg)`,
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
              <input type="text" className="form-control" id="floatingInput" placeholder="Surname" value={formData.surName}
              onChange={handleChange}/>
              <label htmlFor="floatingInput">Surname</label>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingPassword" placeholder="First name" value={formData.firstName} onChange={handleChange}/>
              <label htmlFor="floatingPassword">First name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Middle Name" value={formData.otherName}
              onChange={handleChange}/>
              <label htmlFor="floatingInput">Middle name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Phone Number" value={formData.otherName}
              onChange={handleChange}/>
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={formData.email}
              onChange={handleChange}/>
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Organization" value={formData.surName}
              onChange={handleChange}/>
              <label htmlFor="floatingInput">Organization</label>
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
  
  export default App;