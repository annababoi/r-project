export default function Character(props) {
    let {item: character} = props;
    return (<div class="character">
        <h2>{character.id} - {character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <img src={character.image} alt="#"/>
        </div>);
}