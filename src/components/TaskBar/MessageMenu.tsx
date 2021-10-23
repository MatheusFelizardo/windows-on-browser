import React from 'react'
import styled from 'styled-components'
import { Icon } from '@fluentui/react/lib/Icon';

const MessageMenu = () => {

    const quantityOfMessage = '1'
    return (
        <MessageMenuWrapper quantityOfMessage={quantityOfMessage}>
            <CustomIcons iconName="CommentSolid" />
        </MessageMenuWrapper>
    )
}

interface MessageMenuWrapperProps {
    quantityOfMessage?: string
}

const MessageMenuWrapper = styled.div<MessageMenuWrapperProps>`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: fit-content;

    img { 
        cursor: pointer;
    }
    &::after { 
        content: '${props => props.quantityOfMessage}';
        width:15px;
        height:15px;
        border-radius: 100%;
        background-color: #181717;
        position: absolute;
        bottom: 10px;
        right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .825rem;
        font-weight: 600;
        font-family: 'Microsoft JhengHei UI Light', sans-serif;
    }
`

const CustomIcons = styled(Icon)`
    font-size: 1.25rem;
    cursor:pointer;

   
`
export default MessageMenu
