import { HStack,Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'
//heeeere passing the function without argument
interface Props{
    onSearch : (query : string) =>void;
}
const NavBar = ({onSearch} : Props) => {
    return (
        <div>
            <HStack  padding={"10px"}>
                <Image src={logo} boxSize="60px" />
                <SearchBar onSearch={onSearch}/>
                <ColorModeSwitch/>
            </HStack>
        </div>
    )
}

export default NavBar
