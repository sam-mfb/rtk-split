import {useSliceDispatch, useSliceSelector} from "./counterSlice"
import { Counter } from "./Counter";
import { counterSliceReducer, initializeSlicePackage, counterSliceName, selectCount, incrementByAmount } from "./counterSlice";

/*
    Ideally, these functions would live in some `counterSliceApi` module.
*/

function useCurrentCountValue() {
    const currentCountValue = useSliceSelector(selectCount)
    return currentCountValue
}
function useCountIncrementor() {
    const dispatch = useSliceDispatch()
    return (amount: number) => {
        dispatch(incrementByAmount(amount))
    }
}

export { Counter, counterSliceName, counterSliceReducer, initializeSlicePackage, useCurrentCountValue, useCountIncrementor }