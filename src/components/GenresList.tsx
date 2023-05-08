import React from "react";
import useGenres from "../Hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import GetCroppedImage from "../services/GetCroppedImage";

const GenresList = () => {
    const { Data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner />
    if(error) return null
    return (
        <>
            <List>
                {Data.map((genre) => (
                    <ListItem key={genre.id} paddingY='10px'>
                        <HStack>
                            <Image boxSize='35px' borderRadius="8px" src={GetCroppedImage(genre.image_background)} />
                            <Text fontSize='lg'>{ genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenresList;
