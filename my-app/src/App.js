import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
state = {
  persons:[
{ name :'mohan' ,age :'30'},
{ name :'Ramesh', age :'35'},
{ name : 'Reddy', age :'40'}
  ]
}
changePersionData=()=>{
  this.setState(
    {persons:[
  { name :'mohan' ,age :'30'},
  { name :'Krishna', age :'35'},
  { name : 'Reddy', age :'40'}
    ]}
  )
}
changedTextValue=(event)=>{
  this.setState(
    {persons:[
  { name :'mohan' ,age :'30'},
  { name :event.target.value, age :'35'},
  { name : 'Reddy', age :'40'}
    ]}
  )
}
  render() {
    return (
      <div className="App">
        <h1>Welcome  To ReactJS!</h1>
        <button onClick={this.changePersionData}>Change Persion</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.changePersionData}  changed={this.changedTextValue} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
