import React from 'react'
import { LinkIconTextContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarDay, faCoffee, faComment, faUsers, faCat } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LinkIconTextProps {
    text: string;
    icon: 'back' | 'external'
}

export function LinkIconText(props: LinkIconTextProps) {
    const { text, icon } = props

    const iconObj = {
        back: faCat,
        external: faCalendarDay
    }

    return (
        <LinkIconTextContainer to="/">
            <FontAwesomeIcon icon={iconObj[icon]} color='#3A536B' />
            <span>{text}</span>
        </LinkIconTextContainer>
    )
}
