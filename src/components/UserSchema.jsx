import * as React from 'react';

const UserSchema = ({ generateSchema, savedProps }) => {
  // const codeSnippet = generateSchema === true ? `${JSON.stringify(savedProps)}` : '';
  
  // console.log('here', savedProps[2])
    //iterate through savedProps and add each el to codeSnippet
  const generateCodeSnippet = (userProps) => {
    const schemaSnippet = {};
    //for each property in savedProps, we will add a prop to the new object
    for(const prop of userProps) {
      // console.log('look here', prop)
        schemaSnippet[prop.propName] = {type: `${prop.type}`, required: prop.required, unique: prop.unique, default: prop.defaultVal, validator: prop.validationFunc}//this is equal to just the string type OR an object 
                                          //which contains the rest of the parameters
        
    }
    return JSON.stringify(schemaSnippet)
  }

  return (
    <div className="codeblock">
      <pre>
        <code className="schemaCode">
          {generateCodeSnippet(savedProps)}
        </code>
      </pre>
    </div>
  );
};

export default UserSchema;








































//     ,--._
//     `.   `.                      ,-.
//       `.`. `.                  ,'   )
//         \`:  \               ,'    /
//          \`:  ),.         ,-' ,   /
//          ( :  |:::.    ,-' ,'   ,'
//          `.;: |::::  ,' ,:'  ,-'
//          ,^-. `,--.-/ ,'  _,'
//         (__        ^ ( _,'
//       __((o\   __   ,-'
//     ,',-.     ((o)  /
//   ,','   `.    `-- (
//   |'      ,`        \
//   |     ,:' `        |
//  (  `--      :-.     |
//  `,.__       ,-,'   ;
//  (_/  `,__,-' /   ,'
//  |\`--|_/,' ,' _,'
//  \_^--^,',-' -'(
//  (_`--','       `-.
//   ;;;;'       ::::.`------.
//     ,::       `::::  `:.   `.
//    ,:::`       :::::   `::.  \
//   ;:::::       `::::     `::  \
//   |:::::        `::'      `:   ;
//   |:::::.        ;'        ;   |
//   |:::::;                   )  |
//   |::::::        ,   `::'   |  \
//   |::::::.       ;.   :'    ;   ::.
//   |::::,::        :.  :   ,;:   |::
//   ;:::;`"::     ,:::  |,-' `:   |::,
//   /;::|    `--;""';'  |     :. (`";'
//   \   ;           ;   |     ::  `,
//    ;  |           |  ,:;     |  :
//    |  ;           |  |:;     |  |
//    |  |           |  |:      |  |
//    |  |           |  ;:      |  |
//   /___|          /____|     ,:__|
//  /    /  -hrr-   /    |     /    )
//  `---'          '----'      `---'

// ------------------------------------------------
