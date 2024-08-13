import React from 'react'
import { LinkIconTextContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarDay, faCoffee, faComment, faUsers, faCat, faChevronLeft, faUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LinkIconTextProps {
    text: string;
    icon: 'back' | 'external'
    href: string;
}

export function LinkIconText(props: LinkIconTextProps) {
    const { text, icon, href } = props

    const iconObj = {
        back: faChevronLeft,
        external: faUpRightFromSquare
    }

    return (
        <LinkIconTextContainer to={href} className={icon == "back" ? 'reverse' : ''}>
            <span>{text}</span>
            <FontAwesomeIcon icon={iconObj[icon]} color='#3294F8' />
        </LinkIconTextContainer>
    )
}
