import React, { useState } from 'react';

const AddCyclist = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    residence: '',
    contact: '',
    kinName: '',
    kinAddress: '',
    kinContact: '',
    regNumber: '',
    stage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the data to the back-end for processing (not shown in this example).
  };

  return (
    <div>
      <h2>Add New Boda-Boda Cyclist Record</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields go here, e.g., input elements for each data field */}
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {/* Repeat for other fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCyclist;

