import * as React from 'react';
import UserSchema from './UserSchema';
import { CodeBlock, dracula } from "react-code-blocks";
import { CopyBlock } from 'react-code-blocks';

const SchemaGenerator = ({ code, language, showLineNumbers, generateSchema, setGenerateSchema, savedProps }) => {

  const genSchemaOnClick = (event) => {
    // event.preventDefault();
    setGenerateSchema(true);
  };

  //edit schema?  setGenerateSchema(false);
  // console.log(savedProps)

  return (
    <div className="schemaGenerator">
      
      <UserSchema 
        generateSchema={generateSchema} 
        savedProps={savedProps} 
        />

      <button 
        className="genSchema" 
        onClick={genSchemaOnClick}>
        Generate Schema
      </button>

      <CopyBlock
   text={`${savedProps}`}
   language={"javascript"}
   showLineNumbers={true}
   theme={dracula}/>

      
  
    </div>
  );
};

export default SchemaGenerator;
