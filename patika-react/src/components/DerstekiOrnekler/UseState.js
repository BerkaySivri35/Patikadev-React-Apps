
import { useState } from "react";


function App() {
  const [name, setName] = useState("Berkay");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({title:'İzmir',zip:35150})
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <button onClick={()=> setName("Big Berkay")}>Click</button>
      <hr />
      {
        friends.map((item, index) =>(
          <li key={index}>{item}</li>
        ))
      }
      <button onClick={()=> setFriends([...friends,'Ayşe'])}>
        add friends
      </button>

      <hr />
      <h1>Address: {address.title} - {address.zip}</h1>
      <button onClick={()=>(
        setAddress({title: 'Malta', zip:35119})
      )}>Change Address</button>
    </div>
  );
}

export default App;
