import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useGames";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform : Platform | null;
}
const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const { Data, error } = usePlatform();
    if (error) return null;
    return (
        <Menu>
            <MenuButton  as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name  || "Platforms"}
            </MenuButton>
            <MenuList>
                {Data.map((data) => (
                    <MenuItem onClick={()=>onSelectPlatform(data)} key={data.id}>{data.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
