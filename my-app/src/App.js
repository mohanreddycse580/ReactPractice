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

  deletePersonhandler=(persionIndex)=>{
const persions=this.state.persions;
persions.splice(persionIndex,1);
this.setState({persions:persions})
  }
  render() {

    let persondata=null;
    {
      persondata= (this.state.togglepersons===true?
      <div className="PersonClass">
{this.state.persons.map((persion,index) =>{
  return <Person 
  click={()=>this.deletePersonhandler(index)}
  name={persion.name} age={persion.age}/>
})}
        
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
