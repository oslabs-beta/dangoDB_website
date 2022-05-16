import * as React from 'react';

const SchemaGenerator = ({ generateSchema, setGenerateSchema, savedProps }) => {
  genSchemaOnClick = (event) => {
    event.preventDefault();
    setGenerateSchema(true);
  };

  //edit schema?  setGenerateSchema(false);

  return (
    <div className="schemaGenerator">
      <UserSchema generateSchema={generateSchema} savedProps={savedProps} />

      <button className="genSchema" onclick={genSchemaOnClick}>
        Generate Schema
      </button>
    </div>
  );
};

export default SchemaGenerator;
