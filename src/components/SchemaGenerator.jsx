import * as React from 'react';
import UserSchema from './UserSchema';

const SchemaGenerator = ({ generateSchema, setGenerateSchema, savedProps }) => {

  const genSchemaOnClick = (event) => {
    // event.preventDefault();
    setGenerateSchema(true);
  };

  //edit schema?  setGenerateSchema(false);
  return (
    <div className="schemaGenerator">
      <UserSchema 
        generateSchema={generateSchema} 
        savedProps={savedProps} 
      />

      <button 
        className="genSchemaButton" 
        onClick={genSchemaOnClick}>
        Generate Schema
      </button>
      
    </div>
  );
};

export default SchemaGenerator;
