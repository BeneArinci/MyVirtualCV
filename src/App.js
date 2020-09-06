import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'
import Bio from './Bio.js'
import TechSkills from './TechSkills'
import SoftSkills from './SoftSkills'


class App extends React.Component {
  render () {
     return(
      <div className="App">
        <NavigationBar />
        {/* <WelcomeMessage />
        <Bio /> */}
        {/* <TechSkills /> */}
        <SoftSkills />
      </div>
     )
  }
    

}

export default App;
