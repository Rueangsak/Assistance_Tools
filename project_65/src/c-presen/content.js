import React from 'react'
import Ranking from '../c-content/Ranking'
import QA from '../c-content/QA'
import WordCloud from '../c-content/WordCloud'
// import WordCloud from '../c-content/WordCloud'
import '../CSS/content.css'





const Content = (props) => {
  console.log(props.imgShow)

  if (props.imgShow.name === "rank") {
    return (
      <div className="content-container">
        <Ranking />
      </div>
    )
  }
  else if (props.imgShow.name === "open") {
    return (
      <div className="content-container">
        <QA />
      </div>
    )
  }
  else if (props.imgShow.name === "word") {
    return (
      <div className="content-container">
        <WordCloud />
      </div>
    )
  }
  else if (props.imgShow.name === "multi") {
    return (
      <div className="content-container">
        <WordCloud />
      </div>
    )
  }

  return (
    <div className="content-container"></div>
  )
}

export default Content
