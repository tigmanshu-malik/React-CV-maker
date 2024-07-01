import React from "react";
import { useState } from "react";
import '/src/style/cards.css'


function Intro({value, setValue}){

    return(

        <div className="card">

            <h2>Introduction</h2>

            <form>

            <textarea value={value} onChange={(event) => setValue(event.target.value)} style={{ height: "200px", resize: "none" }}/>
            
            </form>
        </div>
    )
}

export default Intro