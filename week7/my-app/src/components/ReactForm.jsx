import React, { useState } from "react";


function ReactForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name); // Save input to display
    setName(''); // Clear input
  };
 return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}
      <h3>160124737168</h3>
    </div>
  );
}
export default ReactForm;
