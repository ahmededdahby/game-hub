import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React , {useRef} from 'react'
import { BsSearch } from 'react-icons/bs'
// we will pass the search function to the parent (nvavbar) and then from the parent to app.tsx
interface Props{
    onSearch : (query : string) =>void;
}
const SearchBar = ({onSearch} : Props) => {
    //always add ref to the input to get the value
    const ref = useRef<HTMLInputElement>(null) 
    return (
        <form  style={{ width: '100%'}} onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) onSearch(ref.current?.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}></InputLeftElement>
                <Input ref={ref} borderRadius={20} variant='filled' placeholder='search games...'></Input>
            </InputGroup>

        </form>
    )
}

export default SearchBar
