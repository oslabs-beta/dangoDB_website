import React from 'react'; 


 
export const PropButton = ({children, type, onClick}) => {


    return (
        <button onClick = {onClick} type ={type}> 
            {children}
        </button>
    );
};