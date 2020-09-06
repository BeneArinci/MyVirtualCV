import React from 'react';

function NavigationBar () {
  return (
    
       <nav style= {{display:"flex", justifyContent:"flex-end", width:"800px", marginLeft:"auto"}}>
        <p className="f3 link dim black underline pa3 pointer">Bio</p>
        <p className="f3 link dim black underline pa3 pointer">Projects</p>
        <p className="f3 link dim black underline pa3 pointer">Tech-Skills</p>
        <p className="f3 link dim black underline pa3 pointer">Soft-Skills</p>
        <p className="f3 link dim black underline pa3 pointer">Contacts</p>
      </nav>
  
  )
}

export default NavigationBar