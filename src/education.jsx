import React from "react";
import { useState } from "react";
import '/src/style/cards.css'

function Education({edu, setEdu}){

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEdu((edu) => ({
          ...edu,
          [name]: value,
        }));
      };
    

    return(

        <div className="card">

            <h2>Education</h2>

            <form>

                <label>College Name:</label>
                <input name = "name" type="text" onChange={handleChange} value={edu.name}/>
                <label>Course:</label>
                <input name="course" type="text" onChange={handleChange} value={edu.course}/>
                <label>Start Year:</label>
                <input name="start" type="text" onChange={handleChange} value={edu.start}/>
                <label>Graduation year:</label>
                <input name="final" type="text" onChange={handleChange} value={edu.final}/>

            </form>

        </div>
    )

}

export default Education