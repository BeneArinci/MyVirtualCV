import React from 'react';

function NavigationBar ({onRouteChange}) {
  return (
    
       <nav style= {{display:"flex", justifyContent:"flex-end", width:"800px", marginLeft:"auto"}}>
        <p className="f3 link dim black underline pa3 pointer"
        onClick={ () => onRouteChange("homepage") }>Home</p>
        <p className="f3 link dim black underline pa3 pointer"
          onClick={ () => onRouteChange("bio") }>Bio</p>
        <p className="f3 link dim black underline pa3 pointer"
          onClick={ () => onRouteChange("projects") }>Projects</p>
        <p className="f3 link dim black underline pa3 pointer"
          onClick={ () => onRouteChange("techskills") }>Tech-Skills</p>
        <p className="f3 link dim black underline pa3 pointer"
          onClick={ () => onRouteChange("softskills") }>Soft-Skills</p>
      </nav>
  
  )
}

export default NavigationBar