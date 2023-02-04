import React,{useState} from 'react'
import PropTypes from 'prop-types'
import '../CSS/newslide.css'
const Newslide = (props) => {


  const [imgData,setImgData] = useState([{name:"rank",items:[],url:"../../img/rank.jpg"},{name:"open",items:[],url:"../../img/open.jpg"},{name:"word",items:[],url:"../../img/word.jpg"},{name:"multi",items:[],url:"../../img/multi.jpg"}])
  const [showData,setShowData] = useState(false)



  return (
    <div className="newslide-container">
      <div className="newslide-navbar navbar-container">
        <button className="newslide-button button" onClick={()=>setShowData(!showData)}>{props.button}</button>
        {showData? 
        imgData.map((data)=>{
          return(
            <img src={data.url} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} onClick={()=>props.funButton(data)}/>
          )
        })
        :
        <></>}
      </div>
    </div>
  )
}

Newslide.defaultProps = {
  button: 'New Slide   >>',
}

Newslide.propTypes = {
  button: PropTypes.string,
}

export default Newslide
