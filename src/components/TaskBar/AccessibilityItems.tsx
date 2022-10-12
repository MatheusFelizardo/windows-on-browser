import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';
import AccessibilityModal from '../Modal/Accessibility';

const AccessibilityItems = () => {
    const [isOpen, setIsOpen] = useState(false)
    const showChevronUpModal = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <AccessibilityModal setIsOpen={setIsOpen} isOpen={isOpen} />
            <AccessibilityItemsWrapper>
                <CustomIcons iconName="ChevronUp" onClick={showChevronUpModal} />
                <CustomWifi iconName="WifiWarning4" />
                <CustomWifi iconName="Volume3" />
                <LanguagePT>POR</LanguagePT>
            </AccessibilityItemsWrapper>
        </>
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
