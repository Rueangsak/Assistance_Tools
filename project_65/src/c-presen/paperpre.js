import React from 'react'

import '../CSS/paperpre.css'




const Paperpre = (props) => {
  return (
    <div className="paperpre-container">
      <div className ="paperpre-container1">
          <div className="row">
            {props.img.map((data)=>{
              return(
                <div className="column">
                  <img src={data} className='ima' alt="Nature" onClick={()=>props.clickImg(data)}/>
                </div>
              )
            })}
          </div>


        
      </div>
    </div>
  )
}

export default Paperpre
