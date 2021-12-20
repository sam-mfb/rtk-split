import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./Counter";
import { counterSliceReducer, initializeSlicePackage, counterSliceName, selectCount, incrementByAmount } from "./counterSlice";

/*
    Ideally, these functions would live in some `counterSliceApi` module.
*/

function useCurrentCountValue() {
    const currentCountValue = useSelector(selectCount)
    return currentCountValue
}
function useCountIncrementor() {
    const dispatch = useDispatch()
    return (amount: number) => {
        dispatch(incrementByAmount(amount))
    }
}

export { Counter, counterSliceName, counterSliceReducer, initializeSlicePackage, useCurrentCountValue, useCountIncrementor }