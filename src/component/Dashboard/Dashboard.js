import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      houses: [],

    }
    this.deleteHouse=this.deleteHouse.bind(this)
  }

 componentDidMount(){
  axios.get('/api/houses').then(res => {
    this.setState({
      houses: res.data
    })
  })
 }

  refresh(){
  axios.get('/api/houses').then(res => {
    this.setState({
      houses: res.data
    })
  })
 }

 deleteHouse(id){
   axios.delete(`/api/house/${id}`).then(res => {
     this.setState({
       houses: res.data
     })
   })
   
  }


render(){
  
  return(
    <div>
      Dashboard
      <Link to='/wizard'><button>Add New Property</button></Link>
      {this.state.houses.map( (house)=>{ 
        return <House deleteHouse={this.deleteHouse} id={house.id} house={house}/>
    
  })}
    </div>
  )
}


}