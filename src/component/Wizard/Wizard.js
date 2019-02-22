import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Wizard extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''

    }
  }

  handleName(val){
    this.setState({
      name: val
    })
  }
  handleAddress(val){
    this.setState({
      address: val
    })
  }
  handleCity(val){
    this.setState({
      city: val
    })
  }
  handleState(val){
    this.setState({
      state: val
    })
  }
  handleZipCode(val){
    this.setState({
      zipcode: val
    })
  }

  addHouse(){
    const {name, address, city, state, zipcode} = this.state
    axios.post('api/house/', {name, address, city, state, zipcode}).then(res => {
      this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
      })
      console.log('all good')
    })
  }

render(){
  return(
    <div>
     <input placeholder='name' onChange={e => this.handleName(e.target.value)} value={this.state.name}/>
     <input placeholder='address' onChange={e => this.handleAddress(e.target.value)} value={this.state.address}/>
     <input placeholder='city' onChange={e => this.handleCity(e.target.value)} value={this.state.city}/>
     <input placeholder='state' onChange={e => this.handleState(e.target.value)} value={this.state.state}/>
     <input placeholder='zipcode' onChange={e => this.handleZipCode(e.target.value)} value={this.state.zipcode}/>
     <Link to='/'><button onClick={e => this.addHouse()}>Complete</button></Link>
    </div>
  )
}


}