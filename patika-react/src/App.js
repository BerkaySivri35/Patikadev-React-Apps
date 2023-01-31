import { useState } from "react";
import Contact from "./components/Contact"
import Counter from "./components/DerstekiOrnekler/Counter";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./components/reactDom";

function App() {
  //const[isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* {isVisible && <Counter/>}

      <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button> //true ise false / false ise true olacak */}
      {/* <Contact/> */}
      <Root/>
    </div>
  );
}

export default App;
