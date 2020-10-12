import React from 'react';

function Scroll (props) {
  //props children refers to anything is wrapped into a non self closing component. In our case is the cardlist
  return(
    <div className='tc vh-75' style = {{overflow: 'scroll', border: '1px solid lightGreen', width: '50%', margin:'auto', marginTop:'2rem'}}>
      {props.children}
    </div>
  );
}

export default Scroll