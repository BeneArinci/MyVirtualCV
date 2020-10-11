import React from 'react';
import './App.css';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import NavigationBar from '../NavigationBar/NavigationBar';
import Bio from '../../Bio/Bio';
import TechSkills from '../TechSkills/TechSkills';
import {softSkills} from '../../softSkills';
import {projects} from '../../projects';
import SoftSkillsList from '../SoftSkillsList/SoftSkillsList';
import ProjectsList from '../ProjectsList/ProjectsList';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      softSkills: softSkills,
      projects: projects,
      route: 'homepage'
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
        { route === 'bio' && <Bio /> }
        { route === 'techskills' && <TechSkills /> }
        { route === 'softskills' && <SoftSkillsList softSkills={this.state.softSkills}/> }
        { route === 'projects' && 
            <Scroll>
              <ProjectsList projects = {this.state.projects} />
            </Scroll> }
        { route === 'homepage' && <WelcomeMessage /> }
        <Footer />

        {/* { route === 'bio'
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
        } */}
        
      </div>
     )
  }
    

}

export default App;
