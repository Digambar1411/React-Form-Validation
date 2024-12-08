import { useState } from 'react'
import './App.css'
import ErrorMessage from './components/Error';

function App() {

  const [formValues, setFormValues] = useState({ username: '', email: '', password: '' });
  const [formErrors, setformErrors] = useState({ username: '', email: '', password: '' });
  const [submit, setSubmit] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (values) =>{

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errors = {};
    if(!values.username) errors.username = "Username is required";
    if(!values.email) errors.email = "Email is required";
    else if(values.email && !emailRegex.test(values.email)) errors.email = 'This is not a valid email'
    if(!values.password) errors.password = "Password is required";
    else if(values.password?.length < 4) errors.password = 'Password must be more than 4 characters'
    return errors;
  }

  const handleSubmit =(e)=>{
    console.log('submited')
    e.preventDefault();
    const errors = validate(formValues)
    setformErrors(errors);
  }

  return (
    < div className='container'>
      
      {Object.keys(formErrors).length === 0 && submit ?  
        <div className='success-msg'> Logged in succesfully</div> :
         <pre>{JSON.stringify(formValues, null, 2)}</pre>
      }
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='mb-3 heading'>Login Form</div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" name="username" placeholder="username" value={formValues.name} onChange={handleChange} />
          <ErrorMessage msg={formErrors.username} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} />
          <ErrorMessage msg={formErrors.email}/>
        </div>
        

        <div className="mb-5">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder="password" value={formValues.password} onChange={handleChange} />
          <ErrorMessage msg={formErrors.password}/>
        </div>

        <div>
          <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
