import * as React from 'react';

const PropButton = ({ propName, currentProp, setCurrentProp }) => {

  //insert logic for editing the property (setCurrentProp, setSavedProp?)
  //re-render prop form 
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const handleOnClick = (currentProp) => {
    //when prop is clicked, render PropPreview component
  }

  // A value of 0 indicates that the element should be placed in the default navigation order. This allows elements that are not natively focusable (such as <div>, <span>, <p>, and <> with no href) to receive keyboard focus. Links and form controls are best for almost all interactive elements, but tabindex="0" allows other elements to be focusable and thus potentially able to trigger interaction.

  return (
    <div className="prop-button">
      <div 
        tabIndex={0} 
        className="prop-header" 
        role="button" 
        onKeyPress={() => toggle(!open)} 
        onClick={() => toggle(!open)}>
          <div className="prop-header__title">
            <p className="prop-header__title--bold">{propName}</p>
          </div>
          <div className="prop-header__action">
            {/* this will be the arrow */}
          
            <p>{open ? 'Close' : 'Open'}</p>
          </div>
      </div>
      {/* {open && (
        <PropPreview
        savedProps={savedProps}
        />
      )} */}
    </div>
  );
};



const PropPreview = ({ savedProps, onChange }) => {
  return (
    <div className="prop-preview">
      <div className="properties">
        <p>this will be the preview</p>
      </div>
    </div>


  );
};
  // const editOnClick = () => {};
  // <button 
  //       className="edit"
  //       onClick={editOnClick}
  //       >Edit
  //     </button>

//   const [value, setValue] = useState('something');
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
{/* <Dropdown */}
//set label to current property name
// label="Property name still need to get it"
// id="Property id need to get"
// savedProps= {savedProps}
// value={value}
// onChange={handleChange}
// />

    // <label>
    //   {label}
    //   <select value={value} onChange={onChange}>
    //     {options.map((option) => (
    //       <option value={option.value}>{option.label}</option>
    //     ))}
    //   </select>
    // </label>


    // return (
    //   <div className="prop-button">
      
    //     <div className="control">
    //       <div className="arrow"/>
    //     </div>
        
    //     <PropPreview/>
    //   </div>
    // );
export default PropButton;

