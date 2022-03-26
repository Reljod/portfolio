import './styles/App.css';
import Greetings from './components/Greetings';
import Auth from "./components/PiAuth"

function App() {
  return (
    <div className="App">
      <Greetings text="Reljod's Sample Pi App"/>
      <Auth/>
    </div>
  );
}

export default App;
