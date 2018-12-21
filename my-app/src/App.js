import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
state = {
  persons:[
{ name :'mohan' ,age :'30'},
{ name :'Ramesh', age :'35'},
{ name : 'Reddy', age :'40'}
  ],
  togglepersons:false
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
togglepersonhandler=()=>{
  const doesShow=this.state.togglepersons;
  this.setState({
    togglepersons:!doesShow
  
  })
  }

  render() {

    let persondata=null;
    {
      persondata= (this.state.togglepersons===true?
      <div className="PersonClass">

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.changePersionData}  changed={this.changedTextValue} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>:null
      );

    }

    return (
      <div className="App">
        <h1>Welcome  To ReactJS!</h1>
        <button onClick={this.togglepersonhandler}>Show Persion</button>
        {persondata}
      </div>
    );
  }
}

export default App;
