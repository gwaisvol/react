import React, {useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Button from "../Button/Button";

export default function ItemCount({stock, initial, text, onAddToCart}) {
 const [count, setCount] = useState(initial);

 function handleSubstract() {
  if (count >1) setCount(count-1);
 }

 function handleAdd() {
  if (count <stock ) setCount(count+1);
 }


 
 return (
   <div>
   <FlexWrapper>
   <div className="itemcount_control">
     <Button color="#fc6622" onClick={handleSubstract}>-</Button>
     <strong>{count}</strong>
     <Button color="#00cc22" onClick={handleAdd}>+</Button>
   </div>

   <div className="itemcount_btns">
   <button onClick={()=> {onAddToCart(count)}} >{text}</button>
   </div>
   </FlexWrapper>
   </div>
 );
 }