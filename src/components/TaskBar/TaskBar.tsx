import React from 'react'
import styled from 'styled-components'
import AccessibilityItems from './AccessibilityItems'
import DateContainer from './DateContainer'
import InitialButton from './InitialButton'
import MessageMenu from './MessageMenu'
import SearchBar from './SearchBar'
import Shortcuts from './Shortcuts'

interface BodyInterface {
    height: string
}

const TaskBar = ({height}: BodyInterface): React.ReactElement => {
    console.log(height)
    return (
        <TaskBarContainer altura={height}>
            <TaskBarWrapper>
                <div className="left-side">
                    <InitialButton />
                    <SearchBar />
                    <Shortcuts />
                </div>

                <div className="right-side">
                    <AccessibilityItems />
                    <DateContainer />
                    <MessageMenu />
                </div>
            </TaskBarWrapper>
        </TaskBarContainer>
    )
}

export default TaskBar

type TaskBarContainerProps = {
    altura?: string
  }

const TaskBarContainer = styled.div<TaskBarContainerProps>`
    /* height: ${props => props.altura}; */
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 9;
`
const TaskBarWrapper = styled.div`
    width: 100%;
    background: #333;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .left-side, .right-side {
        display: flex;
        align-items: center;
    }
`
