import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>

        <City name={"Lviv"} />
        <City name={"Kyiv"} />
      </header>
    </div>
  );
}

export default App;
