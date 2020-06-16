import React,{useReducer} from 'react';
import counterReducer from './counterReducer';
const Child2=()=>{
    let [state, dispatch]=useReducer(counterReducer,30);
    console.log(state)
    return(
        <div>
            <h3> value of reducer is :{state}</h3>
            <button onClick={()=>{dispatch('DECREMENT')}}>Decrement in reduce</button>
        </div>
    )
}
export default Child2;