import { Card, CardBody, HStack, Heading, Image,Text } from '@chakra-ui/react'
import React from 'react'

import { Game } from '../Hooks/useGames'
import PlatformIconsList from './PlatformIconsList'
import GameMetaCritic from './GameMetaCritic'
import CropingImage from '../services/GetCroppedImage'
import Emoji from './Emoji'
interface Props{
game : Game,
}

const GameCard = ({game}:Props) => {
    return (
        <Card  >
            <Image src={CropingImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='xl'>{game.name}</Heading>
                <HStack justifyContent='space-between' padding={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    
                    <GameMetaCritic score={game.metacritic} />
                    <Emoji rating={game.rating_top}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
