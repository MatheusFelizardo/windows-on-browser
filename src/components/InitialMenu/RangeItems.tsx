import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

interface RangeItemsInterface {
    icon: string
    text: string
    bgColor: string
}

const RangeItems = ({icon,text, bgColor}: RangeItemsInterface) => {
    return (
        <RangeItemsWrapper style={{background: `${bgColor}`}}>
            <div className="customIconWrapper">
                <CustomIcons iconName={icon} />
            </div>

            <span>{text}</span>
        </RangeItemsWrapper>
    )
}

export default RangeItems


const RangeItemsWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1rem;
    cursor: pointer;
    .customIconWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        margin-bottom: 1rem;
    }

    span {
        position: absolute;
        bottom: .5rem;
        left: .5rem;
    }
`

const CustomIcons = styled(Icon)`
    font-size: 2.5rem;
    cursor:pointer;
`