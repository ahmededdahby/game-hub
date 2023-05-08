
import useGenres, { Genre } from "../Hooks/useGenres";
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import GetCroppedImage from "../services/GetCroppedImage";
interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
    const { Data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <List>
                {Data.map((genre) => (
                    <ListItem key={genre.id} paddingY='10px'>
                        <HStack>
                            <Image boxSize='35px' borderRadius="8px" src={GetCroppedImage(genre.image_background)} />
                            <Button fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenresList;
