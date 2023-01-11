
import React, { useState } from "react";
import TextField from '@mui/material/TextField';


function AddDynamicInput(){
   const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }    
   console.log(val,"data-")
return(
    <>  
    <div style={{padding:10}}><button onClick={()=>handleAdd()} style={{paddingRight:100}}>Add Item</button></div>
        {val.map((data,i)=>{
            return(
               <div>
                      
                    <TextField label="Item" value={data} style={{padding:10}} onChange={e=>handleChange(e,i)}/>
                    <button onClick={()=>handleDelete(i)} style={{marginTop:18}}>x</button>
               </div>
            )
        })}
    </>
);
}
export default AddDynamicInput;