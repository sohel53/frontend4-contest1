import React, { useState } from 'react';
import './styles.css'


function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!email) {
      newErrors.push('Email is required.');
    }

    if (!name) {
      newErrors.push('Name is required.');
    }

    if (!password) {
      newErrors.push('Password is required.');
    }

    if (!confirmPassword) {
      newErrors.push('Confirm Password is required.');
    }

    if (password !== confirmPassword) {
      newErrors.push('Password and Confirm Password do not match.');
    }
    if (newErrors.length === 0) {
        newErrors.push('Signup Succefully');
    }

    setErrors(newErrors);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
       
        <div>
          <label>Name:</label>  
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label >Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">Sign Up</button>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default App;
