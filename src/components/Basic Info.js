
import React, { Component } from 'react';

class BasicInfo extends Component{
  constructor(){
    super();
  
  this.state = {
    name: '',
    email:'',
    phoneNo:''
}
/*
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this)*/
}
handleSubmit = (e) => {
    const { name,email,phoneNo } = this.state;
    e.preventDefault();
    alert(`
    ____Your Details____\n
    Email : ${email}
    Name : ${name}
    Phone No : ${phoneNo}
  `)
}

handleChange = (e) => {
  this.setState({
 [e.target.name]: e.target.value
  })
}
  render(){

    return(
      <div>
     <div>Basic Info</div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="Name">Name 
      <input placeholder="Your Name"type="text"name='name' 
onChange={this.handleChange}value={this.state.name}></input>
      </label>

      <label htmlFor="Email">Enter Email 
      <input placeholder=" Your Email"name="email"type="email"onChange={this.handleChange}value={this.state.email}></input>
      </label>

     <label htmlFor="Phn No">Phone No
      <input placeholder="Phn No"name="phoneNo"type="number"onChange={this.handleChange}value={this.state.phoneNo}></input>
      </label>

      <button type="submit">Done</button>
      </form>

      <h1>{this.state.name}</h1>
      <h3>{this.state.email}</h3>
      <h3>{this.state.phoneNo}</h3>

</div>


    )
  }
}
export default BasicInfo;



