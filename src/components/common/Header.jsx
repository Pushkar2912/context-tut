import React from 'react'
// alias name
import { Container, Flex, Header as MantineHeader } from '@mantine/core'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <MantineHeader
            height={60}
        >
            <Container h={'100%'}>
                <Flex h={'100%'} justify={'space-between'} align={'center'}>
                    <Logo />
                    <Navbar />
                </Flex>
            </Container>
        </MantineHeader >
    )
}

export default Header