import React, { useEffect, useState } from 'react';
import { Modal } from '@forge/bridge';

function App() {
  const [summary, setSummary] = useState("null");
  const [description, setDescription] = useState("null");

  const openModal = () => {
    const modal = new Modal({
      resource: 'modal-view',
      onClose: (payload: any) => {},
      size: 'large',
      context: {
        description,
        summary,
      },
    });
    modal.open();
  };


  return (
    <>
    <button onClick={openModal}>
      Click to Open Modal
    </button>
    </>
  );
}

export default App;