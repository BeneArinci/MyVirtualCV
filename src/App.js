import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar';
import Bio from './Bio.js';
import TechSkills from './TechSkills';
import {softSkills} from './softSkills';
import {projects} from './projects';
import SoftSkillsList from './SoftSkillsList';
import ProjectsList from './ProjectsList';
import Scroll from './Scroll';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      softSkills: softSkills,
      projects: projects,
      route: 'bio'
    }
  }

onRouteChange = (route) => {
  this.setState({route: route})
    console.log(route)
  }

  render () {
    
     const {route} = this.state
     console.log(route)
     return(
      <div className="App">
        <NavigationBar onRouteChange = { this.onRouteChange }/>
        { route === 'bio'
          ? <Bio />
          : route === 'techskills'
          ? <TechSkills />
          : route === 'softskills'
          ? <SoftSkillsList softSkills={this.state.softSkills}/>
          : route === 'projects' 
          ?  <Scroll>
              <ProjectsList projects = {this.state.projects} />
            </Scroll>
          : <WelcomeMessage />
        }
    
        {/* <WelcomeMessage />
        <Bio />
        <TechSkills />
        <SoftSkillsList softSkills={this.state.softSkills}/>
        <Scroll>
          <ProjectsList projects = {this.state.projects} />
        </Scroll>   */}
      </div>
     )
  }
    

}

export default App;
