import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

const Shortcuts = () => {
    return (
        <SearchBarWrapper>
            <img
            src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/word_48x1.svg"
            width="32"
            height="32"
            alt="Word product icon"
            />
             <img
            src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/excel_48x1.svg"
            width="32"
            height="32"
            alt="Excel product icon"
            />
             <CustomIcons iconName="EdgeLogo" />
        </SearchBarWrapper>
    )
}

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1.5rem;
    width: fit-content;

    img { 
        cursor: pointer;
    }
   
`

const CustomIcons = styled(Icon)`
    font-size: 1.5rem;
    cursor:pointer;
`

export default Shortcuts
