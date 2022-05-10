/** Controllers for schema generation */

const path = require('path'); 
//require user input here somehow

const schemaObj = {
    'Property Name': '', 
    'Type': TypeButton, 
    'Default Value': '', 
    'Required': BooleanButton, 
    'Unique': BooleanButton, 
    'Validation Function': CheckBox 
}; 

// schema.getProperty = async (req, res, next) => {
//     const { propertyName, type, defaultValue, required, unique, validationFunc } = req.body;
//     try {
//         console.log(req.body); 
//     } catch (err) { 
//         next({
//             log: `Error in getProperty controller ${err}`, 
//             message: {
//                 err: 'Error occurred in getProperty controller. Check server log for more details.',
//             },
//         });
//     };
// };

schema.addProperty = async (req, res, next) => {
    const { propertyName, type, defaultValue, required, unique, validationFunc } = req.body;
    try {
        console.log(req.body)
    } catch (err) {
        next({
            log: `Error in addProperty controller ${err}`, 
            message: {
                err: 'Error occurred in addProperty controller. Check server log for more details.', 
            },
        });
    };
};

// schema.deleteProperty = input => {

// }

// schema.updateProperty = (oldInput, newInput) => {

// }

// schema.generate = () => {
//     return schemaObj;
// }



module.exports = schema; 