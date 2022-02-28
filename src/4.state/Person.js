import React, { Component } from 'react'

export class Person extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Scott',
            city: 'Bengaluru',
            isAdmin:  true
        }
    }
  render() {
      const {name, city, isAdmin} = this.state
    return (
      <div>
          <h2>{name} is from &nbsp;
              {city} and is he admin ? &nbsp;
              {isAdmin? "Yes": "No"}
          </h2>
      </div>
    )
  }
}

export default Person