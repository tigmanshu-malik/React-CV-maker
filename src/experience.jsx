import React from "react";

function Exp({exp, setExp}){

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExp((exp) => ({
          ...exp,
          [name]: value,
        }));
      };
    

    return(
        <div className="card">

            <h2>Personal Experience</h2>

            <form>

                <label>Company Name:</label>
                <input name="company" type="text" onChange={handleChange} value={exp.company}/>
                <label>Position:</label>
                <input name="positions" type="text" onChange={handleChange} value={exp.positions}/>
                <label>Responsibility:</label>
                <textarea name="respons" onChange={handleChange} value={exp.respons}/>
                <label>Start Year:</label>
                <input name="start" type="text" onChange={handleChange} value={exp.start}/>
                <label>End year:</label>
                <input name="end"type="text" onChange={handleChange} value={exp.end}/>

            </form>

        </div>
    )
}

export default Exp