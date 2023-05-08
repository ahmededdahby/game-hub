import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../Hooks/usePlatform'

const PlatformSelector = () => {
    const { Data, error } = usePlatform();
    if(error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
            <MenuList>
                {Data.map(data => <MenuItem key={data.id}>{ data.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
