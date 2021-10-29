import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface PowerOffProps {
    showPowerOffMenu: boolean;
    setShowPowerOffMenu: ( x:boolean) => void;
    setShowModal: ( x:boolean) => void;
    setInitialMenuDisplay: ( x:string) => void;
}

function PowerOff({showPowerOffMenu, setShowPowerOffMenu, setShowModal, setInitialMenuDisplay}: PowerOffProps) {
    const powerOffModalRef = useRef(null)
    const resetInitialMenuConfig = () => {
        setShowPowerOffMenu(false)
        setShowModal(false)
        setInitialMenuDisplay('flex')
    }
    document.body.addEventListener('click', (e)=> {
        const powerButton = document.querySelector('.power_button')

        if(e.target !== powerOffModalRef.current && e.target !== powerButton && !powerButton?.contains(e.target as any) ) {
            setShowPowerOffMenu(false)
        }
    })

    const turnOff = () => {
        document.body.style.background = '#000'
        const root = document.querySelector<HTMLElement>('#root')
        if(root) root.style.display = 'none'
    }

    if(!showPowerOffMenu) return null
    return createPortal(
        <PowerOffContainer onClick={resetInitialMenuConfig}>
            <div className="PowerOffModal" ref={powerOffModalRef}>
                <button>Sleep</button>
                <button onClick={turnOff}>Shut Down</button>
                <button>Restart</button>
            </div>
        </PowerOffContainer>,
        document.getElementById('power-off-modal') as Element
    )
}

export default PowerOff

const PowerOffContainer = styled.div`
    .PowerOffModal {
        display: flex;
        flex-direction: column;
        width: fit-content;

        position: absolute;
        bottom: 150px;
        left: 100px;
        border: 2px solid #777;
        button { 
            text-align: left;
            padding: .3rem .5rem;
            border: none;
            background-color: #555;
            color: #Ffff;
            cursor: pointer;
            font-weight: 500;
            font-size: 1rem;

            &:hover {
                background: #777;
            }
        }
    }
`