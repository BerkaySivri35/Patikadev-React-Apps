import './App.css';
import { useState, useMemo } from 'react';
import Header from './components/ReactMemo/Header';

function App() {
  
  const [number, setNumber] = useState(0);

  const data = useMemo(() =>{
    return {name: 'Berkay'}
  },[]);

  const OnClick = () => {
    setNumber(number+1) 
  }
  
  return (
    <div className="App">
       <Header number={number < 5 ? 0 : number } data={data}/> {/*number bilgisini props olarak header e gönderdik. */}
      <h1>{number}</h1>

      <button onClick={OnClick}>Click</button>
    </div>
  );
}

export default App;
