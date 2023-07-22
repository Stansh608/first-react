
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const myName='Stan';
  const isName=true;
  return (
    <div className="App">

    <Header />
    {/* Pass variable, data to components using props */}
    <Body  name={myName} />
 


    </div>
  );
}

export default App;
