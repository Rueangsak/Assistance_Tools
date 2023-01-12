import { Height } from '@mui/icons-material';
import React from 'react'
import '../CSS/bigpaper.css'





const Bigpaper = (props) => {
  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
  return (
    <div className="bigpaper-container">
      <div className="bigpaper-container1">
        <div class="bigpaper-container22">
          <img id="expandedImg" style={{width:1000,height:700}} src={props.imgShow} />
          <div id="imgtext"></div>
        </div>
      </div>
    </div>
  )
}

export default Bigpaper
