//we have duplicated card styling in the gamecared + gameskeletons component
//for better reusabilty we are going to use a common component

import { Box } from '@chakra-ui/react'
import React ,{ReactNode} from 'react'
interface Props{
    children: ReactNode;
}
const GameCardContainer = ({ children }  : Props) => {
    return (
        <Box  borderRadius={10} overflow='hidden'>{children}</Box>
    )
}

export default GameCardContainer
