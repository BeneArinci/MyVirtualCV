import React from 'react';
import NavLink from '../NavLink/NavLink'


function NavigationBar ({ navItems, onRouteChange }) {
  return (
    // style= {{display:"flex", justifyContent:"flex-end", width:"70%", marginLeft:"auto"}}
       <div className="tr w-100" style={{display:"flex", justifyContent:"flex-end", width:"70%", marginLeft:"auto"}}>
        {
          navItems.map((link) => {
            return (
              <div key={link.id}>
                <NavLink
                  name = {link.title}
                  route = {link.route}
                  onRouteChange = {onRouteChange}
                />
              </div>
              
            )
          })
        }
      </div>
  
  )
}

export default NavigationBar