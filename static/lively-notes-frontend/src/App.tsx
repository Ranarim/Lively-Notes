import React, { useEffect, useState } from 'react';
import { invoke, Modal } from '@forge/bridge';

function App() {
  const [summary, setSummary] = useState("null");
  const [description, setDescription] = useState("null");

  const openModal = () => {
    const modal = new Modal({
      resource: 'main-app',
      onClose: (payload) => {},
      size: 'large',
      context: {
        description,
        summary,
      },
    });
    modal.open();
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
    </>
  );
}

export default App;