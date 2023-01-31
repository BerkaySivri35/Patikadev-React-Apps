import { ThemeProvider } from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';
import Container from './components/Container';
import './App.css';
function App() {
  return (
    <ThemeProvider value="dark">
      <UserProvider >
        <Container/>
      </UserProvider>
      
    </ThemeProvider>
  );
}

export default App;
