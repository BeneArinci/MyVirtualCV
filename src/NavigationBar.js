import React from 'react';

function NavigationBar () {
  return (
    <nav>
       <nav style= {{display:"flex", justifyContent:"flex-end", width:"600px", marginLeft:"55%"}}>
        <p className="f3 link dim black underline pa3 pointer">Bio</p>
        <p className="f3 link dim black underline pa3 pointer">Projects</p>
        <p className="f3 link dim black underline pa3 pointer">Skills</p>
        <p className="f3 link dim black underline pa3 pointer">Contacts</p>
      </nav>
    </nav>
  )
}

export default NavigationBar