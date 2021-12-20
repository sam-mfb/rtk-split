import { useCurrentCountValue, useCountIncrementor } from "counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Multiplier.css"
import { multiplyByAmount, resetValue, selectMultiplierValue, useSliceSelector } from "./multiplierSlice";

export function Multiplier() {
  const multiplierValue = useSliceSelector(selectMultiplierValue);
  const [multiplier, setMultiplier] = useState("1")
  const multiplierAmount = Number(multiplier) || 1
  const counterValue = useCurrentCountValue()
  const dispatch = useDispatch()
  const counterIncrementor = useCountIncrementor()
  
  return (
        <div className="multiplier">
            <h1>Multiplier</h1>
            <div>
                {multiplierValue}
            </div>
            <div>
                <label htmlFor="multiplierValue">Multiplier:</label>
                <input id="multiplierValue" type="number" value={multiplier} onChange={e => {setMultiplier(e.target.value)}} aria-label="Set multiplier" />
            </div>
            <div>
                <button onClick={() => {dispatch(multiplyByAmount(multiplierAmount))}}>Multiply by {multiplierAmount}</button>
            </div>
            <div>
                <button onClick={() => {dispatch(multiplyByAmount(counterValue))}}>Multiply by counter value ({counterValue})</button>
            </div>
            <div>
                <button onClick={() => {counterIncrementor(multiplierAmount)}}>Increment counter by multiplier amount ({multiplierAmount})</button>
            </div>
            <div>
                <button onClick={() => {dispatch(resetValue())}}>Reset</button>
            </div>
        </div>
    )
}