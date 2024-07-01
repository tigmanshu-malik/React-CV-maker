import React from "react";
import "./style/output.css"

function Output({ general, value, exp, edu}) {
  return (
    <div className="mainContainer">
      
      <div className="head">
          <div style={{fontSize:"30px", fontWeight:"700"}}>{general.firstName} {general.lastName}</div>
          <div style={{display: "flex", justifyContent: "space-around", fontSize: "20px", fontWeight: "500", padding: "30px"}}>
            <div>{general.email}</div>
            <div>{general.phone}</div>
          </div>
      </div>

      <div className="content">

        <h3>Introduction</h3>
        <hr></hr>

        <div className="introduction">
          {value}
        </div>

        <h3>Experience</h3>
        <hr></hr>
        
        <div className="experience">

          <div>
            {exp.start} - {exp.end} <br></br>
            {exp.positions}
            
          </div>

          <div>

            <div style={{fontWeight:"600"}}>{exp.company}</div>
            <div>{exp.respons}</div>

          </div>

        </div>

        <h3>Education</h3>
        <hr></hr>

        <div className="experience">

          <div>
            {edu.start} - {edu.final} <br></br>
            
          </div>

          <div>

            <div style={{fontWeight:"600"}}>{edu.name}</div>
            <div>{edu.course}</div>

          </div>

        </div>
      </div>


    </div>
  );
}

export default Output;
