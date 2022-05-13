import * as React from 'react'; 

// SetUniqueButton = (props) => {
//     const [unique, setUnique] = React.useState(false);
//     return (
//       <div>
//         {[
//           { name: 'true', value: true },
//           { name: 'false', value: false },
//         ].map((option) => (
//           <label key={option.name}>
//             {option.name}:
//             <input
//               onChange={() => {
//                 const currentUnique = unique;
//                 setUnique(!currentUnique);
//               }}
//               type="radio"
//               name="answer"
//               value={option.value}
//               checked={option.value === unique}
//             />
//           </label>
//         ))}
//       </div>
//     );
//   }


const SetUniqueButton = (props) => {
    const [unique, setUnique] = React.useState(false);
    return (
      <div>
        {[
          { name: 'true', value: true },
          { name: 'false', value: false },
        ].map((option) => (
          <label key={option.name}>
            {option.name}:
            <input
              onChange={() => {
                const currentUnique = unique;
                setUnique(!currentUnique);
              }}
              type="radio"
              name="uniqueAnswer"
              value={option.value}
              checked={option.value === unique}
            />
          </label>
        ))}
      </div>
    );
  };

  
  export default SetUniqueButton; 