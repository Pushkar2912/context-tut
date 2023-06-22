import { Button, Flex } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import PATHS from '../../constants/paths'

const Navbar = () => {
    return (
        <Flex gap={20}>
            <Button size='sm' variant='subtle' component={Link} to={`${PATHS.AUTH}?type=login`}>
                Log In
            </Button>
            <Button size='sm' variant='filled' component={Link} to={`${PATHS.AUTH}?type=signup`}>
                Sign Up
            </Button>
        </Flex>
    )
}

export default Navbar