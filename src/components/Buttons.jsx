import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decreament, reset } from '../redux/counterSlice'

const Buttons = () => {

    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decreament())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Buttons