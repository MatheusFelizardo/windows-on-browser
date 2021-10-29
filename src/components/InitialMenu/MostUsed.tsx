import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

interface MostUsedInterface {
    icon: string
    text: string
}
const MostUsed = ({icon, text}: MostUsedInterface) => {
    return (
        <MostUsedWrapper>
            <div className="customIconWrapper">
                <CustomIcons iconName={icon} />
            </div>

            <span>{text}</span>
        </MostUsedWrapper>
    )
}

export default MostUsed

const MostUsedWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    margin: .5rem 0;
    cursor: pointer;
    .customIconWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background: #0078d4;
    }
`

const CustomIcons = styled(Icon)`
    font-size: 2rem;
    cursor:pointer;
`