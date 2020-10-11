import React from 'react';

function Scroll (props) {
  //props children refers to anything is wrapped into a non self closing component. In our case is the cardlist
  return(
    <div className='tc' style = {{overflow: 'scroll', border: '1px solid lightGreen', height: '580px', width: '50%', margin:'auto'}}>
      {props.children}
    </div>
  );
}

export default Scroll