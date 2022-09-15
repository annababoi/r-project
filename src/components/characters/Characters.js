import Character from "../character/Character";
import {useState} from "react";


export default function Characters() {
    let [characters, setCharacters] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,6));
        });
    return (<div>
            {characters.map((character, index) => (<Character item={character} key={index}/>))}
        </div>);
}