import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

const AccessibilityItems = () => {
    return (
        <AccessibilityItemsWrapper>
            <CustomIcons iconName="ChevronUp" />
            <CustomWifi iconName="WifiWarning4" />
            <CustomWifi iconName="Volume3" />
            <LanguagePT> POR</LanguagePT>
        </AccessibilityItemsWrapper>
    )
}

const AccessibilityItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: .5rem;
    width: fit-content;

    img { 
        cursor: pointer;
    }
   
`

const LanguagePT = styled.span`
    text-transform: uppercase;
    font-family: 'Microsoft JhengHei UI Light', sans-serif;
    font-size: .875rem;
    cursor: pointer;
`

const CustomIcons = styled(Icon)`
    font-size: .875rem;
    cursor:pointer;
`
const CustomWifi = styled(Icon)`
    font-size: 1.25rem;
    cursor:pointer;
`

export default AccessibilityItems
