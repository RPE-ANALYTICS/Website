import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

export default function Popup({active, setActive}) {
    // const [smShow, setSmShow] = useState(true);
    // const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
        <Modal
          size="sm"
          show={active}
          onHide={() => setActive(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              We so sorry...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This position is closed now.</p>
            <p>But don't give up. We will open this position soon.</p>
          </Modal.Body>
        </Modal>
        {/* <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
      </>
    );
}
