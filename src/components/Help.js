import React from 'react';

const Help = () => (
  <div className='help'>
    <h4>?</h4>
    <ul className='help-commands'>
      <li className='help-command'>add(name)</li>
      <li className='help-command'>del(id)</li>
      <li className='help-command'>rn(id, new name)</li>
      <li className='help-command'>com(id)</li>
    </ul>
  </div>
);

export default Help;