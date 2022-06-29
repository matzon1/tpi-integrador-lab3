import './App.css';
import AuthContextProvider from './components/context/AuthContextProvider';
import {DarkModeProvider} from './components/context/DarkModeContext';
import Container from './components/main/Container';

function App() {
  return (
    <div>
     <DarkModeProvider>
      <AuthContextProvider>
     <Container />
     </AuthContextProvider>
     </DarkModeProvider>

    </div>
  );
}

export default App;
