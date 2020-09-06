import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import NavigationBar from './NavigationBar'

class App extends React.Component {
  render () {
     return(
      <div className="App">
        <NavigationBar />
        <WelcomeMessage />
      </div>
     )
  }
    

}

export default App;
