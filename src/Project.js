import React from 'react';

function Project ({title, description}) {
  return (
<article className="center mw5 mw6-ns br3 hidden mv0">
  <img alt="bank" src="./assets/images/BankTechTest.png" class="db w-100 br2 br--top"/>
  <div class="pa2 ph3-ns pb3-ns center">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">Bank Tech Task</h1>
      </div>
    </div>
    <p class="f3 f5-ns lh-copy measure">
    Small client-side app developed using <b>JavaScript</b>, <b>Jasmine</b>, <b>ESLint</b>. It allows a user to create a bank account, to make deposits and withdrawals and to be able to print their bank statement in a specific format
    </p>
  </div>
</article>
  )
}

export default Project









