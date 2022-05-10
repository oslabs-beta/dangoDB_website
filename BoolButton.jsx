import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function RadioButtons({ onChange, value }) {
    const [radioState, setRadioState] = useState(value);
  
    return (
      <div>
        {[
            
          { name: "true", value: true },
          { name: "false", value: false }

        ].map((option) => (
          <label key={option.name}>
            {option.name}:
            <input
              onChange={(e) => {
                setRadioState(e.target.value);
                onChange(e.target.value === "true");
              }}
              type="radio"
              name="answer"
              value={option.name}
              checked={option.name === radioState}
            />
          </label>
        ))}
      </div>
    );
  }

  export default RadioButtons; 

  function RadioButtons1 (props) {
    const booleans = [{ name: "true", value: true },
            { name: "false", value: false }
                      ].map((option) => (
                        <label key = {option.name}>
                          {option.name}: 
                          <input 
                          onChange = {() => {setRequired(true)}}
                        </label> 
                      ));
    return (
      <div>
        { booleans }
      </div>
    )
  }


