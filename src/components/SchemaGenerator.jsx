import * as React from 'react';
import UserSchema from './UserSchema';

// Schema creation from saved property form
const SchemaGenerator = ({ generateSchema, setGenerateSchema, savedProps }) => {
  return (
    <div className="schemaGen_container">
       <div className="schemaGenerator">
          <UserSchema 
          generateSchema={generateSchema} 
          savedProps={savedProps} 
          />
       </div>
    </div>
  );
};


export default SchemaGenerator;