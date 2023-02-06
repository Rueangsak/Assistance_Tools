import React,{useState} from 'react'


import Navbar2 from '../c-presen/navbar2'
import Newslide from '../c-presen/newslide'
import Paperpre from '../c-presen/paperpre'
import Bigpaper from '../c-presen/bigpaper'
import Content from '../c-presen/content'
import '../CSS/open.css'
import { padding } from '@mui/system'
import { Javascript, PaddingTwoTone } from '@mui/icons-material'

const Open = (props) => {
  // const [img,setImg] = useState(["https://www.w3schools.com/howto/img_nature.jpg"])
  const [img,setImg] = useState([])
  const [imgShow,setImgShow] = useState("")
  const [indexShow,setIndexShow] = useState(0)
  
  

  const addImg=(newImg)=>{
    setImg([...img,newImg])
  }


  // const [items,setItems] = useState([])
  // const addItems=(newItems)=>{
  //   setItems([...items,newItems])
  // }


  const clickcenters = (newcenters,index)=>{
    setImgShow(newcenters)
    setIndexShow(index)
  }



  const changdata = (newImgShow)=>{
    let newimg = img
    newimg[indexShow] = newImgShow
    setImgShow({...newImgShow})
    setImg([...newimg])
  }



  const changtit = (newTitShow)=>{
    let newimg = img
    newimg[indexShow].tit = newTitShow
    setImgShow({...newimg[indexShow]})
    setImg([...newimg])
  }



  return (
    <div className="page-container">
      <Navbar2/>
      <Newslide funButton={addImg}/>
      <div className="page-container1">

        <div className="page-container2">
          <Paperpre img={img} clickImg={clickcenters}/>
        </div>


        <div className="page-container3">
          <Bigpaper imgShow={imgShow}/>
        </div>
        
        <div className="page-container4">
          <h3 style={{padding:10}}>content</h3>
          <Content imgShow={imgShow} indexShow={indexShow} changdata={changdata} changtit={changtit} />
        </div>
      </div>
    </div>
  )
}


export default Open
