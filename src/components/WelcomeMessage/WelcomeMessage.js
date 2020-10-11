import React from 'react';
import './WelcomeMessage.css'

function WelcomeMessage () {
  return (
    <div id = 'welcome' className="flex flex-column w-100">
      {/* eslint-disable-next-line */}
      <h1 className = "center f2 f1-l fw2 black-90 mb0 lh-title w-100">Hi there, I am Benedetta Nice to meet you!<span>👋</span></h1>
      <p className = "center fw2 f3 black-80 mt3 mb4 w-100">
        {/* eslint-disable-next-line */}
        Thank you for visiting my virtual CV, I hope you'll enjoy it 
      </p>
    </div>
  )
}

export default WelcomeMessage