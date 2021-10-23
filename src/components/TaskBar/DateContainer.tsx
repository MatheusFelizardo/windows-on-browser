import React from 'react'
import styled from 'styled-components'

const DateContainer = () => {
    
    const actualTimestamp = new Date();
    let hour = actualTimestamp.getHours();
    let minutes = actualTimestamp.getMinutes();
    var month = actualTimestamp.getUTCMonth() + 1; //months from 1-12
    var day = actualTimestamp.getUTCDate();
    var year = actualTimestamp.getUTCFullYear();
    return (
        <DateWrapper>
            <div className="hour">{hour}:{minutes}</div>
            <div className="date">{month}/{day}/{year}</div>
        </DateWrapper>
    )
}


const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: fit-content;
    cursor:pointer;
`

export default DateContainer
