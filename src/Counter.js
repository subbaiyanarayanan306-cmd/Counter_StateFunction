import { useState } from "react"
import './style.css'

function Counter(){

    
    // TO CREATEING STATE HERE :
    const[incount,setIncount]=useState(0);
     
    // TO INCREMENT THE VALUE 
    function handlechangeinc(){
        setIncount(incount+1);
    }
    // TO DECREMENT THE VALUE AS WELL AS ZERO BELOW PUT ALERT MSG ALSO
    function handlechangedec(){
         incount>0?setIncount(incount-1):alert("0 LIMIT REACHED")
    }



    function handlereset(){

         setIncount(0);
         console.log("RESET DONE")
    }

  


    return(
        <>
        <center className="container">
        <div>
          <h1 className="title">COUNT VALUE BELOW</h1>
          <h1 className="num">{incount}</h1>
          
          <div className="buttn">
          <button  className="btn" onClick={handlechangeinc}>Increment</button>
          <button className="btn1" onClick={handlechangedec}>Decrement</button>
          <button className="btn2" onClick={handlereset}>Reset</button>
          </div>
           </div>
          </center>
        
       
        </>
    )
}

export default Counter