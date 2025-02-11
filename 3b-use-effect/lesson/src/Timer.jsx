// useState and useEffect are properties of the overall React object
import { useState, useEffect } from "react"

function Timer() {
    // Set the state of the Timer component. numSeconds = the stateful/current/initial value. setNumSeconds = a function which allows us to update the state to a different value and trigger the rerender. Rerendering happens when we change the state of something. useState = a hook which can only be called at the top level of the component.
    const [numSeconds, setNumSeconds] = useState(0);
    // Presumably isRunning is a boolean because its useState starting value is 'true'?
    const [isRunning, setIsRunning] = useState(true);
    //  Set the useEffect function to manage interactions to and from the outside world from this React component. When the component first runs the callback function runs only once thanks to the empty array on line 13
    useEffect(() => {
        if (isRunning) {
        // Because setInterval is nested within useEffect, it can run for however long we want it to, despite useEffect only running once. In this case, setInterval begins a timer to go off every second:
        const ticket = setInterval(() => {
            setNumSeconds((previousNumSeconds) => previousNumSeconds + 1);
        }, 1000) // The 1000 = 1000 seconds
    
        // Clean-up
        return () => clearInterval(ticket);
        }   
    }, [isRunning])

    return (
        <div>
            <h1>{numSeconds} seconds have passed.</h1>
            {/* A button which inverts the isRunning boolean */}
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pause" : "Resume"}
            </button>
        </div>
    )
}   

export default Timer;