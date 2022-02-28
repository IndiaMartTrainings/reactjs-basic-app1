import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
        // 3rd Approach 
        //this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }
    
    // 4th Approach 
    changeMessage =() =>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button> */}

          {/* 1st Approach*/}
          {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change Message</button> */}
          
          {/* 2nd Approach*/}
          {/* <button className="btn btn-primary" onClick={() => this.changeMessage()}>Change Message</button> */}

          {/* 3rd Approach*/}
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>    */}

          {/* 4th Approach*/}
          <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>         
      </div>
    )
  }
}

export default EventBind