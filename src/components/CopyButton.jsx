


// <input value={this.state.value}
//           onChange={({target: {value}}) => this.setState({value, copied: false})} />

//         <CopyToClipboard text={this.state.value}
//           onCopy={() => this.setState({copied: true})}>
//           <span>Copy to clipboard with span</span>
//         </CopyToClipboard>

//         <CopyToClipboard text={this.state.value}
//           onCopy={() => this.setState({copied: true})}>
//           <button>Copy to clipboard with button</button>
//         </CopyToClipboard>

//         {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}


import * as React from 'react'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';

const CopyButton = ({ parsedProps }) => {
    const [val, setVal] = React.useState('');
    const[copied, setCopied] = React.useState(false);

      return (
        <div>
          {/* <input value={val}
            onChange={({target: {value}}) => { 
                setVal(value)
                setCopied(false)
            }}
            /> */}
  
          {/* <CopyToClipboard text={parsedProps}
            onCopy={() => setCopied(true)}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard> */}
  
          <CopyToClipboard text={parsedProps}
            onCopy={() => setCopied(true)}>
            {/* <button>Copy</button> */}
            <FaRegCopy className='copy-button' />
          </CopyToClipboard>
          {/* {copied ? <span style={{color: 'red'}}>Copied.</span> : null} */}
        </div>
      );
}

export default CopyButton;

