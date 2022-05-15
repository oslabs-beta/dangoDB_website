import * as React from 'react';


const SchemaGenerator = ({ generateSchema, setGenerateSchema, savedProps }) => {

  genSchemaOnClick = (event) => {
    event.preventDefault();
    setGenerateSchema(true);
    generator(savedProps);
  };

  const generator = (schemaProps) => {
    
     
  };

  //edit schema?  setGenerateSchema(false);

  return (
    <div className="schemaGenerator">
      <UserSchema 
      
      />
      <button className="genSchema" onclick={genSchemaOnClick}>
        Generate Schema
      </button>
    </div>
  );
};

export default SchemaGenerator;
