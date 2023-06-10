import React, { useEffect, useState } from 'react';
import { invoke, Modal } from '@forge/bridge';
import Button from '@atlaskit/button/standard-button';

function App() {
  const [summary, setSummary] = useState("null");
  const [description, setDescription] = useState("null");

  const openModal = () => {
    const modal = new Modal({
      resource: 'main-app',
      onClose: (payload) => {},
      size: 'medium',
      context: {
        description,
        summary,
      },
    });
    modal.open();
  };

  return (
    <>
      <Button
        appearance="primary"
        onClick={openModal}
      >
        Open Sample App!
      </Button>
    </>
  );
}

export default App;