import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Films from './components/Films';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Form from './components/Form';

// import { useState } from 'react';

function App() {    

  // const [select, setSelect] = useState("")
  // const [id, setId] = useState("")

  return (
    <BrowserRouter>
    <div className="App">
    <Form/>
      <Routes>
        <Route path="/films/:id" element={<Films />}/>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planets/:id" element={<Planets />}/>
        <Route path="/species/:id" element={<Species />}/>
        <Route path="/starships/:id" element={<Starships />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
