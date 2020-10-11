import React from 'react';
import './App.css';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import NavigationBar from '../NavigationBar/NavigationBar';
import Bio from '../Bio/Bio';
import TechSkills from '../TechSkills/TechSkills';
import {softSkills} from '../../softSkills';
import {projects} from '../../projects';
import {navItems} from '../../navItems'
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
      navItems: navItems,
      route: 'homepage'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
    console.log(route)
      console.log(this.state.route)
    }

  render () {
     const {route, projects, navItems, softSkills} = this.state
     return(
      <div className="App">
        <NavigationBar navItems = {navItems} onRouteChange = { this.onRouteChange }/>
        { route === 'bio' && <Bio /> }
        { route === 'techskills' && <TechSkills /> }
        { route === 'softskills' && <SoftSkillsList softSkills={softSkills}/> }
        { route === 'projects' && 
            <Scroll>
              <ProjectsList projects = {projects} />
            </Scroll> }
        { route === 'homepage' && <WelcomeMessage /> }
        <Footer />       
      </div>
     )
  }
}

export default App;
