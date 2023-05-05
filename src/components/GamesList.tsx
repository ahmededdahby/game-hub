
import useGames from "../Hooks/useGames";



const GamesList = () => {
    const { Games,error}=useGames()

    return (
        <>
            {error && <h1>{ error}</h1>}
        <ul>
            {Games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
        </>
        
    );
};

export default GamesList;
