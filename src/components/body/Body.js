import React from 'react';
import './Body.css';
import Demo1 from '../../demo/Demo1';
import Demo2 from '../../demo/Demo2';
import Demo3 from '../../demo/Demo3';
import Demo4 from '../../demo/Demo4';
import ConditionalDemo1 from '../conditionalrendering/ConditionalDemo1';
import ConditionalDemo2 from '../conditionalrendering/ConditionalDemo2';
import ListDemo1 from '../listitem/ListDemo1';
import ListDemo2 from '../listitem/ListDemo2';
import UserList from '../listitem/UserList';
import ProductList from '../listitem/ProductList';
import ProductsTable from '../listitem/ProductsTable';
import ForceUpdateDemo1 from '../forceUpdate/ForceUpdateDemo1';
import ForceUpdateDemo2 from '../forceUpdate/FOrceUdateDemo2';
import StateDemo1 from '../state/StateDemo1';
import Greet from '../props/Greet';
import StateDemo0 from '../state/StateDemo0';
import StateDemo2 from '../state/StateDemo2';
import StateDemo3 from '../state/StateDemo3';
import StateDemo4 from '../state/StateDemo4';
import PasswardDemo from '../state/PasswardDemo';
import RemainingChar from '../state/RemainingChar';

import StateDemo5 from '../state/StateDemo5';
import Additionprac from '../state/Additionprac';
import SearchDemo from '../listitem/SearchDemo';
import EventDemo1 from '../events/EventDemo1';
import EventDemo2 from '../events/EventDemo2';
import Addition1 from '../events/Addition1';
import Addition2 from '../events/Addition2';
import SyntheticEvent from '../events/SyntheticEvent';
import EventDemo3 from '../events/EventDemo3';

function Body() {
  return (

    <div className='body'>
   <div>this is body</div> 
{/* <Demo1/> */}
{/* <Demo2/> */}
{/* <Demo3/> */}
{/* <Demo4/> */}
{/* <ConditionalDemo1/> */}
{/* <ConditionalDemo2/> */}
{/* <ListDemo1/> */}
{/* <ListDemo2/> */}
{/* <UserList/> */}
{/* <ProductsTable/> */}
{/* <ProductList/> */}
{/* <ForceUpdateDemo1/> */}
{/* <ForceUpdateDemo2/> */}

{/* <Greet name="Mangesh" msg="goodmorning" age={30}>
  
<> */}
{/* HTML content parent decide to send to child then use props.children */}
          {/* <h3>This is The Content From Body Component</h3>
          <h4>This is heading-4 from Parent</h4>
        </>
      </Greet>
<Greet name="Akash"  />  */}
{/* isRequired makes it mandatory for name  if you remove the name from above  defaultprops for msg and age*/ }
{/* <StateDemo0/> */}
{/* <StateDemo1/> */}
{/* <StateDemo2/> */}
{/* <StateDemo3/> */}
{/* <StateDemo4/> */}
{/* <PasswardDemo/> */}
{/* <RemainingChar/> */}
{/* <Additionprac/> */}
{/* <StateDemo5/> */}
{/* <SearchDemo/> */}
{/* <EventDemo1/> */}
{/* <EventDemo2/> */}
{/* <Addition1/> */}
{/* <Addition2/> */}
{/* <SyntheticEvent/> */}
<EventDemo3/>
</div>
  )
}

export default Body;
