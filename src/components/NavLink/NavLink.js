import React from 'react';

function NavLink ({name, route, onRouteChange}) {
  return (
    <div 
      className="f3-ns f3-m f3-l f5 link dim black underline pa3-ns pa1 pointer"
      onClick={ () => onRouteChange(route) }>{name}
    </div>
  )
}

export default NavLink