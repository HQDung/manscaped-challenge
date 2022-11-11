import React from "react";
import Modal from "react-modal";
import "./style.css";

interface CustomModalInterface {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
  children?: React.ReactNode;
  title: string;
}

const CustomModal: React.FC<CustomModalInterface> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <header className="modal__header">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__button--close">
          &#10006;
        </button>
      </header>
      {children}
    </Modal>
  );
};

export default React.memo(CustomModal);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "16px",
    minWidth: "375px",
  },
};
