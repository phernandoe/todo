import React from 'react';

const Layout = props => (

  <div className='container'>

    <main id='main-content'>{props.children}</main>

  </div>
  
)

export default Layout;