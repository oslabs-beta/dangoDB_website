import * as React from 'react'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';

// Copy button after schema has been generated
const CopyButton = ({ parsedProps }) => {
  const[copied, setCopied] = React.useState(false);

  return (
    <div>
      <CopyToClipboard text={parsedProps}
        onCopy={() => setCopied(true)}>
        <FaRegCopy className='copy-button' size={30} />
      </CopyToClipboard>
    </div>
  );
};

export default CopyButton;

