import './App.css';
import axios from "axios";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About'
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import {useState, useEffect} from "react"
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const email = "joaco@gmail.com"
const password = "123asd"

const API_KEY = '9b0944d4bcd3.117a564457166f964230';
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';



function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }
   useEffect(() =>{
      !access && navigate('/')
   },[access])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
      const characterFiltered = characters.filter(character => character.
         id !== (id))
      setCharacters(characterFiltered)
   }
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
               
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters}
             onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}
export default App;