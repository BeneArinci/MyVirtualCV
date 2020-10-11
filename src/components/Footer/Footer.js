import React from 'react';
import './Footer.css'

function Footer () {
  return (
    <div className = "footer flex justify-around">
      <div style= {{display:"flex", justifyContent:"flex-end", width:"800px", marginLeft:"auto"}}>
      <p className="phone">+44(0)7510060718</p>
      <p className="email">benedetta.arinci@gmail.com</p>
      <a href="https://github.com/BeneArinci">
       <img alt='git' src="./assets/images/github.png" className="githubIcon" />
      </a>
      <a href="https://www.linkedin.com/in/benedetta-arinci/" width="300px">
       <img alt='linkedin' src="./assets/images/linkedin.png" className="linkedinIcon" />
      </a>
      </div>
      
    
    </div>
  )
}

export default Footer