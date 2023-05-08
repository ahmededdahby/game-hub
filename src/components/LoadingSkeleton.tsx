import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const LoadingSkeleton = () => {
    return (
        <Card width='300px' borderRadius={10} overflow='hidden'>
            <Skeleton height="200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}

export default LoadingSkeleton
