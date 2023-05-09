import { HStack,Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <div>
            <HStack  padding={"10px"}>
                <Image src={logo} boxSize="60px" />
                <SearchBar/>
                <ColorModeSwitch/>
            </HStack>
        </div>
    )
}

export default NavBar
