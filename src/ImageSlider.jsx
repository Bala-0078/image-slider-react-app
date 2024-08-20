import react from 'react'
import './style.css'
export default function ImageSlider({images}){
  const [stateValue,setState]=react.useState(0)
  function next(){
    if(stateValue===images.length-1){
      setState(0)
    }else{
      setState(stateValue+1)
    }
  }
  function previous(){
    if(stateValue===0){
      setState(images.length-1)
    }
    else{
      setState(stateValue-1)
    }
  }
  return(
    <div>
      <div className="images">
        <img src={images[stateValue]} className="car-images"/>
      </div>
     
      <div className="buttons">
        <button onClick={previous}>previous</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}