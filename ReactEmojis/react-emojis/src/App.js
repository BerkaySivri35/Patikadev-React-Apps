import logo from './logo.svg';
import './App.css';
import { EmojiProvider } from './context/EmojiContext';
import Container from './components/container';

function App() {
  return (
    <EmojiProvider>
      <Container/>
    </EmojiProvider>
    
  );
}

export default App;
