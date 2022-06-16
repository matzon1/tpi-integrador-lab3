import './App.css';
import {DarkModeProvider} from './components/context/DarkModeContext';
import Container from './components/main/Container';


function App() {
  return (
    <div>
     <DarkModeProvider>
     <Container />
     </DarkModeProvider>
    </div>
  );
}

export default App;
