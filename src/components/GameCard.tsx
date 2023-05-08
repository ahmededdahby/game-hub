import { Card, CardBody, HStack, Heading, Image,Text } from '@chakra-ui/react'
import React from 'react'

import { Game } from '../Hooks/useGames'
import PlatformIconsList from './PlatformIconsList'
import GameMetaCritic from './GameMetaCritic'
import CropingImage from '../services/Image-URL'
interface Props{
 game : Game,
}

const GameCard = ({game}:Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={CropingImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between' padding={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <GameMetaCritic score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
