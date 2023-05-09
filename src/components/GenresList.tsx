
import useGenres, { Genre } from "../Hooks/useGenres";
import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import GetCroppedImage from "../services/GetCroppedImage";
interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenresList = ({ onSelectGenre,selectedGenre }: Props) => {
    const { Data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {Data.map((genre) => (
                    <ListItem key={genre.id} paddingY='10px'>
                        <HStack>
                            <Image  objectFit="cover" boxSize='35px' borderRadius="8px" src={GetCroppedImage(genre.image_background)} />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenresList;
