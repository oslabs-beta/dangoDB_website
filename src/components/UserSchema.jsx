import * as React from 'react';

const UserSchema = ({ generateSchema, savedProps }) => {
  // const codeSnippet = generateSchema === true ? `${JSON.stringify(savedProps)}` : '';

    //iterate through savedProps and add each el to codeSnippet
  const generateCodeSnippet = (userProps) => {
    const schemaSnippet = {};
    //for each property in savedProps, we will add a prop to the new object
    for(const prop of userProps) {
      // console.log('look here', prop)
        schemaSnippet[prop.propName] = {type: `${prop.type}`, required: prop.required, unique: prop.unique, default: prop.defaultVal, validator: prop.validationFunc}
                                          //which contains the rest of the parameters
        //change false in validator func to null
        //true in validator should be a code comment saying 'insert your callback function here'
        //if default value is an empty string, change it to null
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

// function MyCodeComponent(props) {
//   return (
//     <CopyBlock
//       text={props.code}
//       language={props.language}
//       showLineNumbers={props.showLineNumbers}
//       wrapLines
//     />
//   );
// }

// function MyCoolCodeBlock({ code, language, showLineNumbers }) {
//   <CopyBlock
//     text={code}
//     language={language}
//     showLineNumbers={showLineNumbers}
//     theme={dracula}
//     codeBlock
//   />;
// }


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
