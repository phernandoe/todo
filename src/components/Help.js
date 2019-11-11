import React, { useState } from 'react';

const Help = () => {

  const [isOpen, setOpen] = useState(true);

  const handleClick = () => setOpen(!isOpen);

  if (isOpen) {
    return (
      <div className='help'>
        <button aria-label='help button' className='help-button' onClick={handleClick}>?</button>
        <ul className='help-commands'>
          <li className='help-command'>add(name)</li>
          <li className='help-command'>del(id)</li>
          <li className='help-command'>rn(id, new name)</li>
          <li className='help-command'>com(id)</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className='help'>
        <button aria-label='help button' className='help-button' onClick={handleClick}>?</button>
      </div>
    )
  }
  
};

export default Help;