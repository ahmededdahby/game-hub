import React from 'react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../Hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface Props{
    platforms : Platform[]
}
const PlatformIconsList = ({ platforms }: Props) => {
    const iconMap : {[key:string]:IconType}= {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaPlaystation,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android : FaAndroid,
        web : BsGlobe,
    }
    return (
        <HStack marginY={"10px"}>
            {platforms.map((platform) => <Icon as={ iconMap[platform.slug]} color={"gray.500"} key={platform.id}/>)}
        </HStack>
    )
}

export default PlatformIconsList
