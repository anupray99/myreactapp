import { useReducer } from "react";

const initialState = { count: 0 };

const reducerFunc = (state, action) => {
    console.log('action', action)
    console.log('state', state)
    if (action.type === 'increment') {
        return { count: state.count + 1 }
    }
    if (action.type === 'decrement') {
        return { count: state.count - 1 }
    }
}
const ReducerDemo = () => {
    const [state, dispatchFunc] = useReducer(reducerFunc, initialState);

    return (<div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatchFunc({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatchFunc({type: 'decrement'})}>decrement</button>
        
    </div>)

}

export default ReducerDemo;