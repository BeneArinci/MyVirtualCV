import React from 'react';

function Project ({imageURL, title, description, githubpage}) {
  return (
<article className="center mw5 mw6-ns br3 hidden mv0" style={{margin:"auto", marginBottom:"3rem"}}>
  <img alt="project" src={imageURL} className="db w-100 br2 br--top" style={{height: "auto"}}/>
  <div className="pa2 ph3-ns pb3-ns center">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="dark-green f5 pa3 f3-ns mv0 w-100">{title}</h1>
      </div>
    </div>
    <div className="lh-copy measure w-100 pa0">
    <p className="f5-ns f7 w-100 lh-copy measure">
    {description} <br></br>
    For more info visit: <a className="flex justify-center w-100 lh-copy measure f5-ns f7" href = {githubpage}>{githubpage}</a>
    </p > 
     


    </div>
    
  </div>
</article>
  )
}

export default Project









