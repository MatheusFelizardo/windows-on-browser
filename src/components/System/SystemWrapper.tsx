import React, { useState } from 'react'
import styled from 'styled-components'
import Body from '../Body/Body'
import TaskBar from '../TaskBar/TaskBar'

const SystemWrapper = () => {
    const [bodyHeight, setBodyHeight] = useState('95vh')
    const [taskBarHeight, setTaskBarHeight] = useState('5vh')

    return (
        <SystemWrapperContainer>
            <Body height={bodyHeight} />
            <TaskBar height={taskBarHeight} />
        </SystemWrapperContainer>
    )
}

const SystemWrapperContainer = styled.div`
    /* overflow: hidden; */
`

export default SystemWrapper
