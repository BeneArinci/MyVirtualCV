import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'
import Bio from './Bio.js'
import TechSkills from './Skills'

class App extends React.Component {
  render () {
     return(
      <div className="App">
        <NavigationBar />
        {/* <WelcomeMessage />
        <Bio /> */}
        <TechSkills />
      </div>
     )
  }
    

}

export default App;
