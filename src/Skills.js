import React from 'react';

function TechSkills () {
  return (
    <div className="flex flex-column">
      <div id = "javascript">
        <img alt="js" src="./assets/images/javascript.png" width="100" height="auto"/>
        <img alt="react" src="./assets/images/react.png" width="150" height="auto"/>
        <img alt="nodejs" src="./assets/images/nodejs.png" width="150" height="100"/>
        <img alt="jquery" src="./assets/images/jquery.png" width="100" height="auto"/>
        <img alt="jest" src="./assets/images/jest.png" width="100" height="auto"/>
        <img alt="jasmine" src="./assets/images/jasmine.png" width="100" height="auto"/>
      </div>
      <div id = "ruby" class = 'pa1'>
        <img alt="ruby" src="./assets/images/ruby.png" width="100" height="auto"/>
        <img alt="ruby" src="./assets/images/rails.png" width="100" height="auto"/>
        <img alt="rspec" src="./assets/images/rspec.png" width="100" height="auto"/>
      </div>
      <div id = "webdev" class = 'pa2'>
        <img alt="html" src="./assets/images/html.png" width="100" height="auto"/>
        <img alt="css" src="./assets/images/css.png" width="100" height="auto"/>
      </div>
      <div id="extra" class = 'pa2'>
        <img alt="git" src="./assets/images/git.png" width="100" height="auto"/>
        <img alt="github" src="./assets/images/github.png" width="100" height="auto" style={{marginLeft:"10px"}}/>
        <img alt="git" src="./assets/images/travis.png" width="100" height="auto"/>
      </div>
    </div>
  )
}

export default TechSkills