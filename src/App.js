import logo from './logo.svg';
import './App.css';

import SpeechOutput from './SpeechOutput';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web application that can take in a text input, convert the text to speech and display the spoken words on the screen using in browser capability
        </p>
        {/* <TextInput handleChange={handleChange} handleClick={handleClick} /> */}
        <SpeechOutput />
       
        
      </header>
    </div>

  );
}

export default App;
