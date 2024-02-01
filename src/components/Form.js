import React, { useState } from "react";

const Form = ({ movieName }) => {
  const initialFormData = {
    movie: movieName,
    fullName: "",
    email: "",
    numberOfTickets: 1,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formData", JSON.stringify(formData));

  
    setFormData(initialFormData);

    alert("Form data saved to local storage!");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h1>Form</h1>
      <hr />
      <p>
        Movie Name:
        <input
          type="text"
          name="movie"
          value={formData.movie}
          required
          onChange={handleInputChange}
        />
      </p>
      <p>
        Full Name:
        <input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formData.fullName}
          required
          onChange={handleInputChange}
        />
      </p>
      <p>
        Email:
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your Email Address"
          value={formData.email}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Number of Tickets:
        <input
          type="text"
          name="numberOfTickets"
          placeholder="Enter number of tickets"
          required
          value={formData.numberOfTickets}
          onChange={handleInputChange}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
