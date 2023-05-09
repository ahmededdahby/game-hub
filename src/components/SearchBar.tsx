import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
            <Input borderRadius={20} variant='filled' placeholder='search games...'></Input>
        </InputGroup>
    )
}

export default SearchBar
