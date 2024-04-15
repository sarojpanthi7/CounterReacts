import React, {useState} from "react";
function Counter()
 {

   const [count, setCount] = useState(0);

    const Decrease = ()=> {setCount(count-1)};
    const Reset = ()=> {setCount(0)};
    const Increase = ()=> {setCount(count+1)};
    return(
     <div className="container">
        <p id="result">{count}</p>
        <div className="Buttons">
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Increase}>Increase</button>
        </div>
     </div>
    );
 }
export default Counter