import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

const ResendTrackingBtn: React.FC = () => {
  const [modalHidden, setModalHidden] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");

  const openModal = () => setModalHidden(false);

  const closeModal = () => setModalHidden(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <>
      <Button title="Resend Tracking" onClick={openModal} />
      <Modal title="Resend Tracking" isOpen={!modalHidden} onClose={closeModal}>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <div className="space-x-2 text-right mt-6">
          <Button title="Resend" onClick={closeModal} />
          <Button title="Cancel" onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default React.memo(ResendTrackingBtn);
