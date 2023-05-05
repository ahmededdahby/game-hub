import { HStack,Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <div>
            <HStack justifyContent='space-between' padding={10}>
                <Image src={logo} boxSize="60px" />
                <ColorModeSwitch/>
            </HStack>
        </div>
    )
}

export default NavBar
