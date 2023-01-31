import logo from './logo.svg';
import './App.css';
import User from './components/User';

const Friends = ['Berkay','Eren', 'Berk']; //Array olarak liste
const Friends2 = [ //Object olarak liste
  {
    id:1,
    name: 'Berkay'
  },

  {
    id:2,
    name: 'Eren'
  },

  {
    id:3,
    name: 'Berk'
  }
]
function App() {
  return (
    <div className="App">
      <User 
      name="Berkay" 
      surname="Sivri" 
      //isLoggedIn={true} 
      age={22}
      Friends={Friends}
      Friends2={Friends2}
      address={{
        title :"Karabaglar/Izmir",
        zipCode: 35150
      }}
      />
    </div>
  );
}

export default App;
