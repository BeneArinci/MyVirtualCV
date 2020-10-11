import React from 'react';

function Project ({imageURL, title, description, githubpage}) {
  return (
<article className="center mw5 mw6-ns br3 hidden mv0" style={{margin:"auto", marginBottom:"30px"}}>
  <img alt="bank" src={imageURL} className="db w-100 br2 br--top" width="600" height="300"/>
  <div className="pa2 ph3-ns pb3-ns center">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="dark-green f5 pa3 f3-ns mv0">{title}</h1>
      </div>
    </div>
    <div className="f3 f5-ns lh-copy measure">
    <p className="f3 f5-ns lh-copy measure">
    {description} <br></br>
    For more info visit: <a href = {githubpage}>{githubpage}</a>
    </p > 
     


    </div>
    
  </div>
</article>
  )
}

export default Project









