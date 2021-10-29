import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';
import ReactDOM from 'react-dom';
import InitialMenu from '../InitialMenu/InitialMenu';

const InitialButton = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <InitialButtonWrapper id="InitialButton">
            <WindowsLogo iconName="WindowsLogo" onClick={()=> setShowModal(!showModal)}  />
            <InitialMenu open={showModal} setShowModal={setShowModal}/>
        </InitialButtonWrapper>
    )
}

const InitialButtonWrapper = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    border-right: 1px solid#444;
    
    &:hover {
        background-color:#444;
    }
`

const WindowsLogo = styled(Icon)`
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
`

export default InitialButton
