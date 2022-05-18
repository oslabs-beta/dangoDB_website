import * as React from 'react';


const PropButton = ({ propName, currentProp, setCurrentProp }) => {

  const [showPropPreview, setShowPropPreview] = useState(false);
  

  return ( 
    <div className="prop_btn">
      
      <button className="property_drop" onClick={()=>setShowPropPreview(!showPropPreview)}>{(showPropPreview)?'hide':'show'} property button</button>
      <div className="propPreview">
        <div>
          <label>{propName}</label>
        </div>

          {showPropPreview && 
            <div >
              <p>here where the currentProp goes</p>
              <button>this will close preview </button>
            </div> 
          }

      </div>
    </div>
  )
}






// const PropButton = ({ propName, currentProp, setCurrentProp }) => {

//   //insert logic for editing the property (setCurrentProp, setSavedProp?)
//   //re-render prop form 
//   const [open, setOpen] = useState(false);

//   const toggle = () => setOpen(!open);

//   const handleOnClick = (currentProp) => {
//     //when prop is clicked, render PropPreview component
//   }


//   return (
//     <div className="propbutton">
//       <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">Property</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={propName}
//         label="Age"
//         // onChange={handleChange}
//       >
//         <MenuItem value={10}>Ten</MenuItem>
//       </Select>
//       </FormControl>
//     </div>
//     );
//   };
    // <div className="prop-button">
    //   <div 
    //     tabIndex={0} 
    //     className="prop-header" 
    //     role="button" 
    //     onKeyPress={() => toggle(!open)} 
    //     onClick={() => toggle(!open)}>
    //       <div className="prop-header__title">
    //         <p className="prop-header__title--bold">{propName}</p>
    //       </div>
    //       <div className="prop-header__action">
    //         {/* this will be the arrow */}
          
    //         <p>{open ? 'Close' : 'Open'}</p>
    //       </div>
    //   </div>

    // </div>




// const PropPreview = ({ savedProps, onChange }) => {
//   return (
//     <div className="prop-preview">
//       <div className="properties">
//         <p>this will be the preview</p>
//       </div>
//     </div>


//   );
// };
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

