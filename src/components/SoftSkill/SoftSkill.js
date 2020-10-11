import React from 'react';

function SoftSkill ({title, description}) {
  return (
      <article className="center mw5 mw6-ns br3 hidden mv0 ma3">
        <h1 className="purple f3-ns f3-m f3-l f4 bg br3 br--top black-100 mv0 pv3 ph3 w-100">{title}</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns f5-m f5-l lh-copy measure w-100" style={{margin: "0px"}}>
            {description}
          </p>
        </div>
      </article>
  )
}

export default SoftSkill