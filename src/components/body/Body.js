import React from 'react';
import './Body.css';
import Demo1 from '../../demo/Demo1';
import Demo2 from '../../demo/Demo2';
import Demo3 from '../../demo/Demo3';
import Demo4 from '../../demo/Demo4';
import ConditionalDemo1 from '../conditionalrendering/ConditionalDemo1';

function Body() {
  return (

    <div className='body'>
   <div>this is body</div> 
{/* <Demo1/> */}
<Demo2/>
<Demo3/>
<Demo4/>
<ConditionalDemo1/>
</div>
  )
}

export default Body;
