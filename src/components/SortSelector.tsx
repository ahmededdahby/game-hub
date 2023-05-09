import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSort: (ordering: string) => void;
    sortOrder : string;
}
const SortSelector = ({onSort , sortOrder} : Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        {value : '-rating' , label : 'Average rating'}
    ]
    const ordering = sortOrders.find(o => o.value === sortOrder)
    return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Sorted as : {ordering ? ordering.label : "Relevance"}
        </MenuButton>
        <MenuList>
                {sortOrders.map(ord => <MenuItem onClick={()=> onSort(ord.value)} key={ord.value}  value={ord.value}>{ ord.label}</MenuItem>)}
        </MenuList>
    </Menu>
    )
}

export default SortSelector
