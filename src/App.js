import './App.css';

import Evento from './components/Evento'

import Form from './components/Form'

function App() {
  return (
    <div className="App">

    <Evento />
    <Form />
    <Evento numero="1" />
    </div>
  );
}

export default App;
