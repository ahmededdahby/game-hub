import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";

const GamesList = () => {
    const { Games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6 , 7 ,8];

    return (
        <>
            {error && <h1>{error}</h1>}

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding="10px">
                {isLoading &&
                    skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
                {Games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GamesList;
