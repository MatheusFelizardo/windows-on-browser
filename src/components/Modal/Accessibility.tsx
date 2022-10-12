import styled from 'styled-components'
import Modal from './Modal'
import { FaBluetooth } from 'react-icons/fa'
import { GrUpdate } from 'react-icons/gr'

interface AcessibilityModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccessibilityModal = ({ isOpen, setIsOpen}: AcessibilityModalProps) => {
    
    return (
        <Modal isOpen={isOpen}>
            <Container>
                <Icons>
                 <FaBluetooth className="bluetooth" onClick={(e)=> {e.currentTarget.classList.toggle('active')}} />
                 <GrUpdate className="update"/>
                </Icons>
            </Container>
        </Modal>
    )
}

export default AccessibilityModal

const Container = styled.div`
    background: #333;
    position: absolute;
    right: 214px;
    bottom: 66px;
`

const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    svg {
        padding: 10px;
        cursor: pointer;
    }

    .bluetooth {
        color: #3caaf9;
        transition: .5s;
        &.active {
            color: white;
        }
    }

    .update {
        font-size: 14px;
       path {
        stroke: white;
       }
    }
`