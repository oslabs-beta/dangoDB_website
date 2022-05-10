import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function App() {
    const { control, watch } = useForm();
    console.log(watch());
  
    return (
      <form>
        <Controller
          name="radio"
          control={control}
          render={({ ref, ...props }) => {
            return <div>
                <RadioButtons {...props}/>
                <TypeButton {...props}/>
            </div>
          }}
          defaultValue={false}
        />
      </form>
    );
  }