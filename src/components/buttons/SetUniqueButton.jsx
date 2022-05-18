import * as React from 'react'; 

const SetUniqueButton = ({ propInfo, setPropInfo }) => {
    return (
      <div>
        {[
          { name: 'true', value: true },
          { name: 'false', value: false },
        ].map((option) => (
          <label className="uniquebtn" key={option.name}>
            {option.name}:
            <input
              onChange={() => {
                const currentUnique = propInfo.unique;
                setPropInfo({
                  ...propInfo, 
                  unique: !currentUnique
                });
              }}
              type="radio"
              name="uniqueAnswer"
              value={option.value}
              checked={option.value === propInfo.unique}
            />
          </label>
        ))}
      </div>
    );
  };

  export default SetUniqueButton; 