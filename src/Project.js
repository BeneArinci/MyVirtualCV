import React from 'react';

function Project ({imageURL, title, description}) {
  return (
<article className="center mw5 mw6-ns br3 hidden mv0">
  <img alt="bank" src={imageURL} class="db w-100 br2 br--top"/>
  <div class="pa2 ph3-ns pb3-ns center">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">{title}</h1>
      </div>
    </div>
    <p class="f3 f5-ns lh-copy measure">
    {description}
    </p>
  </div>
</article>
  )
}

export default Project









