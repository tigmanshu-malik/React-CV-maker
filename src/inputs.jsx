import React, { useState } from "react";
import General from "./general";
import Education from "./education";
import Output from "./output";
import Intro from "./indroduction";
import Exp from "./experience";

function Inputs() {
  const [general, setGeneral] = useState({
    firstName: "Tigmanshu",
    lastName: "Malik",
    phone: "+91 XXXXX",
    email: "example@gmail.com",
  })

  const [value, setValue] = useState("Tell us about yourself")

  const [exp, setExp] = useState({

    company: "Meta",
    respons: "Managed the backend",
    start: "2023",
    end: "2024",
    positions: "Intern"
  })

  const [edu, setEdu] = useState({

    name: "UPES Dehradun",
    course: "Btech CSE",
    start: "2023",
    final: "2027"
  })

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", flex: 1, justifyContent: "start", alignItems: "center", paddingTop: "30px"}}>
        <General general={general} setGeneral={setGeneral} />
        <Intro value={value} setValue={setValue}/>
        <Education edu={edu} setEdu={setEdu}/>
        <Exp exp={exp} setExp={setExp}/>
      </div>
      <div style={{ flex: 1 }}>
        <Output general={general} value={value} exp={exp} edu={edu}/>
      </div>
    </div>
  );
}

export default Inputs;
