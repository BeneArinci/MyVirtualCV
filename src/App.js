import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'
import Bio from './Bio.js'

class App extends React.Component {
  render () {
     return(
      <div className="App">
        <NavigationBar />
        <WelcomeMessage />
        <Bio />
      </div>
     )
  }
    

}

export default App;
