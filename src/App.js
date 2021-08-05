import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Dhaka">
        <p>This is capital of Bangladesh</p>
      </Greet>
      <Greet name="Sunamganj">
        <button>Have a Visit</button>
      </Greet>
      <Greet name="Sylhet"></Greet>
      {/* <Welcome></Welcome> */}
      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
