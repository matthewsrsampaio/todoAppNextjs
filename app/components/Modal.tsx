
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box modal-open w-11/12 max-w-5xl">
            {children}
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn" onClick={() => setModalOpen(false)}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal