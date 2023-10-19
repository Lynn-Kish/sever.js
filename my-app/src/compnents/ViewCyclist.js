import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ViewCyclist() {
  const { cyclistId } = useParams();
  const [cyclistData, setCyclistData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulate fetching cyclist data from the backend (replace this with actual API call)
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/cyclists/${cyclistId}`); // Replace with your API endpoint
        const data = await response.json();
        setCyclistData(data);
      } catch (error) {
        console.error('Error fetching cyclist data:', error);
      }
    };

    fetchData();
  }, [cyclistId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Simulate saving the edited data (replace this with an actual API call)
    const updatedData = { ...cyclistData }; // Make a copy of the data
    // Update the updatedData object with edited fields

    // Send the updated data to the server (POST or PUT request)

    // Once the data is successfully updated on the server, update the cyclistData state
    setCyclistData(updatedData);
    setIsEditing(false);
  };

  if (!cyclistData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>View Cyclist</h2>
      {isEditing ? (
        <div>
          <h3>Edit Cyclist Information</h3>
          {/* Create an edit form with input fields */}
          <input
            type="text"
            value={cyclistData.name}
            onChange={(e) => setCyclistData({ ...cyclistData, name: e.target.value })}
          />
          {/* Add input fields for other cyclist data */}
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <div>
            <strong>Name:</strong> {cyclistData.name}
          </div>
          {/* Display other cyclist data here */}
          <button onClick={handleEdit}>Edit</button>
          <Link to="/">Back to Dashboard</Link>
        </div>
      )}
    </div>
  );
}

export default ViewCyclist;
