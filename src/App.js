import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'
import Bio from './Bio.js'
import TechSkills from './TechSkills'
import softSkillsList from './SoftSkillsList'
import {softSkills} from './softSkills'
import SoftSkillsList from './SoftSkillsList';


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
        <SoftSkillsList softSkills={this.state.softSkills}/>
      </div>
     )
  }
    

}

export default App;
