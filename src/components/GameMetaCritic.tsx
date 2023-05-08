import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props{
    score : number,
}
const GameMetaCritic = ({ score }: Props) => {
    let scoreColor = score > 90 ? "green" : score>60 ? "orange" : ""
    return (
        <Badge colorScheme={scoreColor} fontSize='14px' borderRadius="4px">{ score}</Badge>
    )
}

export default GameMetaCritic
