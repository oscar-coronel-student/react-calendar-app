import Modal from 'react-modal'
import { ModalContent } from './ModalContent'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root')

export const CalendarModal = () => {

    const closeModal = () => {
        console.log('closing...')
    }

    return <>
        <div>
            <Modal
                isOpen={ true }
                //onAfterOpen={ afterOpenModal }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                <ModalContent />
            </Modal>
        </div>
    </>
}