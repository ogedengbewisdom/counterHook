import { useEffect, useState } from "react"

const useCounter = (countFxn) => {
    
    const [counter, setCounter] = useState(0)
    useEffect( () => {
       const interval = setInterval(() => {
            // if (countFxn) {
            //     setCounter(countFxn)
            // } else {
            //     setCounter(countFxn)
            // }

            ////////////////////////////

            setCounter(countFxn)
        }, 1000)
        return () => clearInterval(interval);
    },[countFxn])

    return counter
}

export default useCounter