import * as React from 'react';

const TypeButton = ({ propInfo, setPropInfo }) => {
  const typeOptions = [
    { name: 'number', value: 'number' },
    { name: 'decimal128', value: 'decimal128' },
    { name: 'string', value: 'string' },
    { name: 'boolean', value: 'boolean' },
    { name: 'objectid', value: 'objectid' },
    { name: 'UUID', value: 'UUID' },
    { name: 'date', value: 'date' },
  ];

  const handleTypeChange = (event) => {
    setPropInfo({
      ...propInfo,
      type: event.target.value,
    });
  };

  return (
    <div className="dropdown">
      <Dropdown
        label="type"
        id="type"
        typeOptions={typeOptions}
        value={propInfo.type}
        handleTypeChange={handleTypeChange}
      />
    </div>
  );
};

const Dropdown = ({ value, handleTypeChange, typeOptions }) => {
  return (
    <label>
      Type:
      <select className="toggle" value={value} onChange={handleTypeChange}>
        {typeOptions.map((option) => (
          <option key={option.name} value={option.value}>{option.name}</option>
        ))}
      </select>
    </label>
  );
};

export default TypeButton;
