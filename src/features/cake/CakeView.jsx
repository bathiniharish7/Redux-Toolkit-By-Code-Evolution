import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './cakeSlice';
function CakeView() {
  const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of Cakes : {numOfCakes}</h1>
        <button onClick={()=>dispatch(ordered(1))}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default CakeView