import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    // ...other fields with initial values
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    // You can access the form data via the 'formData' state.
  };

  return (
    <div>
      <h2>Register a new Boda-Boda Cyclist</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Create form fields for each data point */}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        {/* ...other form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

