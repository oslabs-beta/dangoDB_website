import * as React from 'react';
import UserSchema from './UserSchema';

const SchemaGenerator = ({ generateSchema, setGenerateSchema, savedProps }) => {

  // const genSchemaOnClick = (event) => {
  //   // event.preventDefault();
  //   setGenerateSchema(true);
  // };

  //edit schema?  setGenerateSchema(false);
  return (
    <div className="schemaGen_container">
       <div className="schemaGenerator">
          <UserSchema 
          generateSchema={generateSchema} 
          savedProps={savedProps} 
          />
       </div>
      <div>
      {/* <button className="schemabtn"
          onClick={genSchemaOnClick}>
          Generate Schema
        </button> */}
        {/* <button className="new_prop"
          onClick={}>
          Generate Property
        </button> */}
      </div>
    
    </div>
  );
};

export default SchemaGenerator;
