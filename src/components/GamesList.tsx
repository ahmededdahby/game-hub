
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";



const GamesList = () => {
    const { Games, error } = useGames()

    return (
        <>
            {error && <h1>{error}</h1>}
            <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10}>
                {Games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>

        </>

    );
};

export default GamesList;
