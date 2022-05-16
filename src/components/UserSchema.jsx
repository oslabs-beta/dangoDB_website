import * as React from 'react';

const UserSchema = ({ generateSchema, savedProps }) => {
   if (generateSchema === true) {
     const printed = () => console.log(savedProps)
    }
// generator(savedProps);
//   const generator = () => {
   
//   };

  return <div>{printed}</div>;
};

export default UserSchema;
