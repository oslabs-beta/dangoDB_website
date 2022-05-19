import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import CopyButton from './CopyButton';


// User Schema is a rendered schema after clicking generate schema with copy funcationality
const UserSchema = ({ generateSchema, savedProps }) => {

  const [parsedProps, setParsedProps] = React.useState('');
  
  // Temporary useEffect
  React.useEffect(() => {
    setParsedProps(parseState(savedProps));
  }, [savedProps]);

  return (

    <div className="codeblock">
      <div className="cpybtn">
        <CopyButton
          
          className="copy_btn"
          parsedProps = { parsedProps }
        />
      </div>
      <div className="mirror">
        <CodeMirror
          className="codemirror"
          value={parsedProps}
          height = '500px'
          width = '500px'
          theme = { oneDark }
          extensions = {[javascript({ jsx: true })]}
          editable = {false}
        />
      </div>
    </div>
  );
};  


const parseState = (state) => {
  if (state.length === 0) return '';
  const indent = '  ';
  const newLine = '\n';
  const objectEnd = ': ';
  let numIndent = 1;
  let code = 'const mySchema = dango.schema('.concat(newLine, indent.repeat(numIndent), '{');
  numIndent += 1;
  for (let i = 0; i < state.length; i++) {
    code = code.concat(newLine);
    parseObject(state[i]);
  }
  numIndent -= 1;
  code = code.concat(newLine, indent.repeat(numIndent),'}', newLine, ');');

  function parseObject (obj) {
    code = code.concat(indent.repeat(numIndent), obj.propName, objectEnd, newLine, indent.repeat(++numIndent), '{', newLine);
    numIndent += 1;
    for (const key in obj) {
      if (key !== 'propName') {
        const parsedKey = parseKey(key)
        const parsedValue = parseValue(key, obj[key])
        code = code.concat(indent.repeat(numIndent), parsedKey, objectEnd);
        code = code.concat(parsedValue,',');
        code = code.concat(newLine);
      }
    }
    code = code.concat(indent.repeat(--numIndent), '},');
    numIndent -= 1;
  };

  function parseKey (key) {
    if (key === 'defaultVal') key = 'default';
    else if (key === 'validationFunc') key = 'validator';
    return key;
  };

  function parseValue (key, value) {
    if (key === 'defaultVal' && value === '') return null;
    else if (key === 'validationFunc' && value === false) return null;
    else if (key === 'validationFunc' && value === true) return '/** Insert Callback Function Here */';
    else if (key === 'type' || key === 'defaultVal') return `'${value}'`;
    else return value;
  };
  return code;
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
