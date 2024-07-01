import React from "react";
import "/src/style/cards.css";

function General({ general, setGeneral }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGeneral((general) => ({
      ...general,
      [name]: value,
    }));
  };

  return (
    <div className="card">
      <h2>General Information</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={general.firstName}
          onChange={handleChange}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={general.lastName}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={general.email}
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={general.phone}
          onChange={handleChange}
        />

      </form>
    </div>
  );
}

export default General;
