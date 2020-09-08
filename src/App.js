import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'
import Bio from './Bio.js'
import TechSkills from './TechSkills'
import SoftSkill from './SoftSkill'
import {softSkills} from './softSkills'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      softSkills: softSkills
    }
  }
  render () {
     return(
      <div className="App">
        <NavigationBar />
        {/* <WelcomeMessage />
        <Bio /> */}
        {/* <TechSkills /> */}
        <SoftSkill softSkills={this.state.softSkills}/>
      </div>
     )
  }
    

}

export default App;
