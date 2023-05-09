import React from 'react'
import meh from "../assets/meh.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import bulls from "../assets/bulls-eye.webp"
import { Image, ImageProps } from '@chakra-ui/react'
interface Props{
    rating : number
}
const Emoji = ({ rating }: Props) => {
    
    const emojiMap : {[key : number] : ImageProps} = {
        3: { src: meh, alt: 'meh', boxSize : "25px" },
        4: { src: thumbsUp, alt: 'Recommended',boxSize : "25px" },
        5 : {src:bulls , alt:'exeptional',boxSize : "35px"}
    }
    return (
        <Image {...emojiMap[rating]} />
    )
}

export default Emoji
