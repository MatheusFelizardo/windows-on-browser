import React from 'react'
import styled from 'styled-components'
import { TextField } from '@fluentui/react/lib/TextField';
const SearchIconProps = { iconName: 'Search' };

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <StyledTextField iconProps={SearchIconProps} placeholder="Type here to search"/>
        </SearchBarWrapper>
    )
}

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    background: #FFF;
`
const StyledTextField = styled(TextField)`
    width: 100%;
    height: 56px;

    .ms-TextField-fieldGroup {
        border: none;
        height: 56px;
        padding: 0 1rem;
        &:hover {
            border-left: none;
        }

        input {
            padding: 0px 8px 4px 35px;
        }

        i {
            right: 0;
            left: 15px;
            bottom: 18px;
            font-size: 1.5rem;
            color: #333;
        }

    }
`

export default SearchBar
