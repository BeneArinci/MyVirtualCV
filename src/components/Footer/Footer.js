import React from 'react';
import './Footer.css'

function Footer () {
  return (
    <div className = "footer">
      <div style= {{display:"flex", justifyContent:"flex-end", width:"100%", marginLeft:"auto"}}>
      <p className="phone f7 f4-ns f4-m f4-l">+44(0)7510060718</p>
      <p className="email f7 f4-ns f4-m f4-l">benedetta.arinci@gmail.com</p>
      <a href="https://github.com/BeneArinci">
       <img alt='git' src="./assets/images/github.png" className="githubIcon" />
      </a>
      <a href="https://www.linkedin.com/in/benedetta-arinci/" >
       <img alt='linkedin' src="./assets/images/linkedin.png" className="linkedinIcon" />
      </a>
      </div>
      
    
    </div>
  )
}

export default Footer