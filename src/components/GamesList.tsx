import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
interface Props{
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
}
const GamesList = ({selectedGenre , selectedPlatform}: Props) => {
    const { Data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            {error && <h1>{error}</h1>}

            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                spacing={6}
                padding="10px"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <LoadingSkeleton  />
                        </GameCardContainer>
                    ))}
                {Data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard  game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GamesList;
