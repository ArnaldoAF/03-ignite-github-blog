import React from 'react'
import { LinkIconTextAchorContainer, LinkIconTextContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'

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

    if (icon == "external") {
        return (
            <LinkIconTextAchorContainer
                href={href}
                target="_blank">
                <span>{text}</span>
                <FontAwesomeIcon icon={iconObj[icon]} color='#3294F8' />
            </LinkIconTextAchorContainer>
        )
    }
    return (
        <LinkIconTextContainer
            to={href}
            className={icon == "back" ? 'reverse' : ''}>
            <span>{text}</span>
            <FontAwesomeIcon icon={iconObj[icon]} color='#3294F8' />
        </LinkIconTextContainer>
    )
}

