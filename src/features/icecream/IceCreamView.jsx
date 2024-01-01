import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ordered,restocked } from './iceCreamSlice';

function IceCreamView() {
  const numOfIceCreams = useSelector((state)=>state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of IceCreams : {numOfIceCreams}</h1>
        <button onClick={()=>dispatch(ordered(1))}>Order IceCream</button>
          <button onClick={()=>dispatch(restocked(10))}>Restock IceCreams</button>
         
    </div>
  )
}

export default IceCreamView