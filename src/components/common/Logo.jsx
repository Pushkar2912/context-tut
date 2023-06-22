import { ActionIcon } from '@mantine/core'
import React from 'react'
import { FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PATHS from '../../constants/paths'

const Logo = () => {
    return (
        <ActionIcon component={Link} to={PATHS.HOME} color="blue" size="lg" radius="md" variant="light">
            <FaBolt size={16} />
        </ActionIcon>
    )
}

export default Logo