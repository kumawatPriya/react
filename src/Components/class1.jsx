import React from "react";
import img1 from "../amber-fort-5164731_1280.jpg"
import img2 from "../architecture-639103_1280.jpg"
import img3 from "../images/black-well-woven-area-rugs-removebg-preview.png"

class CLass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            handle : <img className="image" src={img1} alt="img1" />,
            handle1 : <img className="img11" src={img3} alt="img3"/>
        }
    }

    handleImage = ()=>{
        this.setState({handle : <img className="image1" src={img2} alt="img2"/>})
    }
    handleImage1 = ()=>{
        this.setState({handle : <img className="image" src={img1} alt="img1"/>})
    }
    rotateImg = ()=>{
      
        
    }

    render(){
        return(
            <>
            <div className="image">
          <h1>{this.state.handle}</h1>
          <span><button onClick={this.handleImage}>Reset Image</button></span>
          <span> <button onClick={this.handleImage1}>Back</button></span>
          <h2 >{this.state.handle1}</h2>
          <button onClick={this.rotateImg} >Spin</button>
            </div>
            </>
        )
    }
}
export { CLass }