import React from 'react';

const Searchbox = ({ searchChange }) => {    
  console.log("SearchBox");
    return (
    <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' 
        type='search' placeholder='character?' onChange={ searchChange } />
    </div>    
    );
  }
  
export default Searchbox;