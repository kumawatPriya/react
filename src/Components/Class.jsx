import React, {Component} from "react";


class Tab extends React.Component{
    constructor(props){
        super(props)
        this.state={
            handle : 0
        }
    }
    click = ()=>{
        this.setState({handle: this.state.handle + 1})
    }
    click1 = ()=>{
        this.setState({handle: this.state.handle - 1})
    }

    render(){
        return(
            <>
            <h1>{this.state.handle}</h1>
            <button onClick={this.click}>+</button>
            <button onClick={this.click1}>-</button>
            </>
        )
    }
}

export { Tab }