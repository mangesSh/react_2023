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
import Parent from '../comp-Communication/Parent';
import Demo5 from '../../demo/Demo5';
import Demo6 from '../../demo/Demo6';
import MemoParent from '../memo/MemoParent';
import UseMemoDemo1 from '../hooks/UseMemoDemo1';
import UseMemoDemo2 from '../hooks/UseMemoDemo2';
import UseCallBackDemo1 from '../hooks/UseCallBackDemo1';
import LifeCycleDemo1 from '../lifecycle/LifeCycleDemo1';
import LifeCycleDemo2 from '../lifecycle/LifeCycleDemo2';
import LifeCycleDemo3 from '../lifecycle/LifeCycleDemo3';
import UseEffectDemo1 from '../hooks/UseEffectDemo1';
import UseEffectDemo2 from '../hooks/UseEffectDemo2';
import UseEffectDemo3 from '../hooks/UseEffectDemo3';
import UseRefDemo1 from '../hooks/UseRefDemo1';

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
{/* <EventDemo3/> */}
{/* <Parent/> */}
{/* <Demo5/> */}
{/* <Demo6/> */}
{/* <MemoParent/> */}
{/* <UseMemoDemo1/> */}
{/* <UseMemoDemo2/> */}
{/* <UseCallBackDemo1/> */}
{/* <LifeCycleDemo1 name="Rahul" /> */}
  {/* <LifeCycleDemo2 /> */}
  {/* <LifeCycleDemo3/> */}
   <UseEffectDemo1 />
     <UseEffectDemo2 />
      <UseEffectDemo3 />
      <UseRefDemo1 />
      {/* <RefDemo1 /> */}
 
      {/* <RefDemo2 /> */}
      {/* <RefDemo3 /> */}
      {/* <RefDemo4 /> */}
</div>
  )
}

export default Body;
