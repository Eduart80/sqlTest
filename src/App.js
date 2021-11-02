
import './App.css';
import {useState} from "react";

function App() {
  const [returnedData , setReturnedData]= useState(['hello']);
  const [people, setPeople]=useState({id:0,name:'', last:'', age:0, city:''})

  const setInput = (e)=>{
    const {name, value} = e.target;
    if(name === 'id' || name === 'age'){
      setPeople(prevState => ({
        ...prevState,
        [name] : parseInt(value)
      }))
      return
    }
    setPeople(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const fetchData = async ()=>{
    const newData = await fetch('/api', {
      method: 'POST',
      headers :{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name:people.name
      })
    }).then(res => res.json())
    console.log(newData)
    setReturnedData(newData[0])
  }


  return (
    <div className="App">
       <input type="number" name="id" placeholder="person ID" onChange={setInput}/>
        <input  name="name" placeholder="Name" onChange={setInput}/>
        <input  name="last" placeholder="Last Name" onChange={setInput}/>
        <input type="age" name="persons" placeholder="Age" onChange={setInput}/>
        <input  name="city" placeholder="City" onChange={setInput}/>
        <button onClick={()=> fetchData()}>Find</button>
        <button onClick={()=> fetchData()}>Create New</button>
        <p>Person id : {returnedData.id}</p>
        <p>First Name: {returnedData.name}</p>
        <p>Last  Name: {returnedData.last}</p>
        <p>Age       : {returnedData.age}</p>
        <p>City      : {returnedData.city}</p>
        {returnedData}
    </div>
  );
}

export default App;
