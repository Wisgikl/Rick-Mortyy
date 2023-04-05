import axios from "axios";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const Detail = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() =>{
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(({data}) => { 
         if (data.name) {
            setCharacters(data);

         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      return setCharacter({})
    }, [id]);
    return (
        <div>

        </div>
    )
}

export default Detail;