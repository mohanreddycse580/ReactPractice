import React  from 'react';
import './person.css';

const Person=(props)=>{

    const ageCheck = props.age;
  
    if(ageCheck==='35'){
    return <div className='person'>
        <p onClick={props.click}> Hi, I'm  {props.name} ,  My age  is {props.age}.</p>
        {props.children}
        <input type="text" onChange={props.changed}/>
       </div>
    } else{
       return <div className='person'>
        <p onClick={props.click}> Hi, I'm  {props.name} ,  My age  is {props.age}.</p>
        {props.children}
        </div>
    }
}
export default Person;