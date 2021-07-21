import React, { useState,useImperativeHandle } from "react";

function Counter(props,ref) {

    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment
      }));

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Child</button>
        </div>
    )
}

const forwaredCounter = React.forwardRef(Counter);

export default forwaredCounter;