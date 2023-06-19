import { useEffect, useState } from "react"

const useCounter = (count) => {
    
    const [counter, setCounter] = useState(0)
    useEffect( () => {
       const interval = setInterval(() => {
            if (count > 0) {
                setCounter((count) => count + 1)
            } else {
                setCounter((count) => count - 1)
            }
        }, 1000)
        return () => clearInterval(interval);
    },[count])


    return counter
}

export default useCounter