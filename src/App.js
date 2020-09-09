import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar';
import Bio from './Bio.js';
import TechSkills from './TechSkills';
import softSkillsList from './SoftSkillsList';
import {softSkills} from './softSkills';
import {projects} from './projects';
import SoftSkillsList from './SoftSkillsList';
import ProjectsList from './ProjectsList';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      softSkills: softSkills,
      projects: projects
    }
  }
  render () {
     return(
      <div className="App">
        <NavigationBar />
        {/* <WelcomeMessage />
        <Bio /> */}
        {/* <TechSkills /> */}
        {/* <SoftSkillsList softSkills={this.state.softSkills}/> */}
        <ProjectsList projects = {this.state.projects} />
      </div>
     )
  }
    

}

export default App;
