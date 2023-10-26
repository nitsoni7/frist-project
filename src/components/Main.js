import { useEffect, useState } from "react";

const Main = () => {



    let time = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(time);

    const UpdateTime = () =>{
        setClock(new Date().toLocaleTimeString());
    }

    // setInterval(UpdateTime, 1000);
    
    useEffect(() => {
        alert("Hello World") 
     },[clock]);
    console.log(clock);
    return(
        <>
        <h1>
            {clock}
        </h1>
        <button onClick={UpdateTime}>New Time</button>
        </>
    )
}

export default Main;