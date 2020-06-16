import React,{useContext} from 'react';  // use some things
import CounterContext from './CounterContext';

const Child=()=>{
    let counterValue= useContext(CounterContext) // use somethings
    console.log(counterValue)
    return(
        <div>
            <h1> this is first child element</h1>
         <h2> counter value is {counterValue[0]}</h2>
         <button onClick={()=>{counterValue[1](++counterValue[0])}}> Increament</button>
        </div>
    )
}
export default Child;