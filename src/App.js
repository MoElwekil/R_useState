import React, { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onClick}>Counter</button>
            <p>Current Counter: {counter}</p>
        </div>
    )
}

export default App