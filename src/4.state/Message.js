import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
      super()
    
      this.state = {
            name: 'Scott',
            message: 'Welcome Scott'
      }

    }

    subscribe(){
        this.setState({
            message : "Thank you for subscribing"
        })
        // this.state.message ="Thank you for subscribing"
        // console.log(this.state.message)
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.subscribe()}
          >Subscribe</button>
      </div>
    )
  }
}

export default Message