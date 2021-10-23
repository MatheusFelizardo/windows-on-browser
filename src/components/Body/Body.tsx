import React from 'react'
import styled from 'styled-components'
interface BodyInterface {
    height: string
}

const Body = ({height}: BodyInterface) => {
    return (
        <BodyContainer altura={height}>
            <BodyWrapper style={{background: 'url(/assets/backgrounds/windowsBg.jpg)'}}>
            </BodyWrapper>
        </BodyContainer>
    )
}

export default Body

type BodyContainerProps = {
    altura?: string
  }

const BodyContainer = styled.div<BodyContainerProps>`
   /* height: ${props => props.altura}; */
`

const BodyWrapper = styled.div`
    height: calc(100vh - 56px);
    width: 100%;
    background: #f1f1f1;
    background-size: cover !important;
    background-repeat: no-repeat;
`
