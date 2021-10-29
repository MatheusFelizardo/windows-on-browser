import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

interface ControllerButtonInterface {
    icon: string
    text: string
    onClick?: () => void
    className?: string
}

const ControllerButton = ({icon,text, onClick, className}: ControllerButtonInterface) => {
    return (
        <ControllerButtonWrapper className={className} onClick={onClick}>
        <div className="customIconWrapper">
            <CustomIcons iconName={icon} />
        </div>

        <span>{text}</span>
        </ControllerButtonWrapper>
    )
}

export default ControllerButton


const ControllerButtonWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    margin: 1rem 0;
    cursor: pointer;
    width: fit-content;
    .customIconWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
    }
`

const CustomIcons = styled(Icon)`
    font-size: 1.5rem;
    cursor:pointer;
`
