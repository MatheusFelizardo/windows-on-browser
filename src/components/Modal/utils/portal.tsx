import { createPortal } from 'react-dom'

const ModalPortal = ({children}: any) => {
  return createPortal(children, document.getElementById('generic-modal-root') as Element)
}

export default ModalPortal