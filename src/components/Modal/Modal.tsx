import React from 'react'
import styled from 'styled-components/macro'
import ModalPortal from './utils/portal'

const Modal = ({isOpen, children, ...props}: any) => {

  isOpen ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "initial"

  if(isOpen) {
    return (
      <ModalPortal>
        {children}
      </ModalPortal>
    )
  }

  return null
}

export default Modal

