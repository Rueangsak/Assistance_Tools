
import '../CSS/bigpaper.css'
import TextField from '@mui/material/TextField';


import React, {useState, useRef} from 'react';


const Bigpaper = (props) => {



  console.log("Bigpaper" , props);

  
  if (props.imgShow.name === "rank") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>

          <TextField id="outlined-basic" 
          value={props.imgShow.tit}
          style={{padding:20}}
          />

          <br/>
          {props.imgShow.items.map((data,index)=>{
            return(
              <div key={index}>
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                value={data.text}
                variant="standard"
                size="small"
                style={{padding:50}}
              />
              </div>
            )
          })}

    
        </div>
      </div>
    )
  }


  if (props.imgShow.name === "open") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>
          <TextField id="outlined-basic"
          value={props.imgShow.tit} 
          style={{padding:20}}
          />
        </div>
      </div>
    )
  }  

  if (props.imgShow.name === "word") {
    return (
      <div className="bigpaper-container1">
      <div className="bigpaper-container" style={{width:1020,height:700}}>
        <TextField id="outlined-basic"
        value={props.imgShow.tit} 
        style={{padding:20}}
        />
      </div>
    </div>
    )
  }  

  if (props.imgShow.name === "multi") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>
        <TextField id="outlined-basic"
        value={props.imgShow.tit} 
        style={{padding:20}}
        />
          <br/>
          
          {props.imgShow.items.map((data,index)=>{
            return(
              <div key={index}>
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                value={data.text}
                variant="standard"
                size="small"
                style={{padding:50}}
              />
              
              </div>
            )
          })}
        </div>
      </div>
    )
  }





  return (
    <div className="bigpaper-container2">
      <div className="bigpaper-container1">
        {/* <div class="bigpaper-container22">
          <img id="expandedImg" style={{width:1000,height:700}} src={props.imgShow.url} />
          <div id="imgtext"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Bigpaper
