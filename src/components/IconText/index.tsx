import React from 'react'
import { IconTextContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarDay, faCoffee, faComment, faUsers, faCat } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconTextProps {
    text: string;
    icon: 'github' | 'calendar' | 'comentary' | 'building' | 'users'
}

export function IconText(props: IconTextProps) {
    const { text, icon } = props

    const iconObj = {
        github: faCat,
        calendar: faCalendarDay,
        comentary: faComment,
        building: faBuilding,
        users: faUsers,
    }

    return (
        <IconTextContainer>
            <FontAwesomeIcon icon={iconObj[icon]} color='#3A536B' />
            <span>{text}</span>
        </IconTextContainer>
    )
}
