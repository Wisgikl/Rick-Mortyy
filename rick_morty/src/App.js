import './App.css';
import axios from "axios";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About'
import {useState} from "react"
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';




function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => { 
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);

         } else {
            return ('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const characterFiltered = characters.filter(character => 
         character.id !== Number(id))
      setCharacters(characterFiltered)
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}> </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail:id' element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}
export default App;