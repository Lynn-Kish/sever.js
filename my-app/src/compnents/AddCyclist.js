import React, { useState } from 'react';

function AddCyclist() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    // ... other form fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call to send data to the backend
  };

  return (
    <div>
      <h2>Add New Boda-Boda Cyclist Record</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {/* Repeat for other form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCyclist;
