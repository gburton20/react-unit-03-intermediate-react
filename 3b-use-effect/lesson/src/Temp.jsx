import { useState, useEffect } from "react";
function Temp() {
    const [temp, setTemp] = useState(32);
    const [degreesCelsius, setDegreesCelsius] = useState(0); 
    
    // This function isn't typical for useEffect as it's idompotent
    // When temperature changes, recalculate degreesCelsius:
    useEffect(() => {
        const newCelsius = (temp - 32) * 9 / 5;
        setDegreesCelsius(newCelsius);
    }, [temp]) // '[temp]' - the dependencies array for the useEffect function - run when the comp first loads AND if that value changes

    return (
        <div>
            <h1>Temperatures!</h1>
            <p>Temperature in fahrenheit: {temp}</p>
            <button onClick={() => setTemp((t) => t + 1)}>+</button>
            <button onClick={() => setTemp((t) => t - 1)}>-</button>
            <p>Temperature in celsius: {Math.round(degreesCelsius)}</p>
        </div>
    )
}

export default Temp;