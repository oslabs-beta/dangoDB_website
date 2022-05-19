import * as React from 'react';

// Saved property button
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
};



export default PropButton;