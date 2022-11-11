import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const RefundBtn: React.FC = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const openModal = () => setModalHidden(false);

  const closeModal = () => setModalHidden(true);

  return (
    <>
      <Button title="Refund" onClick={openModal} />
      <Modal title="Refund Order" isOpen={!modalHidden} onClose={closeModal}>
        <p>Do you want to refund your order?</p>
        <div className="space-x-2 text-right mt-6">
          <Button title="Yes" onClick={closeModal} />
          <Button title="No" onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default React.memo(RefundBtn);
