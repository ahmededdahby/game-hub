import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Sorted as : Relevence
        </MenuButton>
        <MenuList>
            <MenuItem>Relevence</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>
        </MenuList>
    </Menu>
    )
}

export default SortSelector
