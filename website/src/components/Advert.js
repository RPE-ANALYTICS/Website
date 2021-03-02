import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import blackLogo from "../img/logos/rpe_black.jpg";


export default function Advert({data, show, setShow}) {
    const handleSend = () => {
        window.open(
          "mailto:fwydra@rp-eng.com?subject=Subject&body=%20"
        );
      };

    return (
      <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-100w"
          aria-labelledby="modal"
          key={data.id}
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal">
            <img className="logo-nav" src={blackLogo} alt="RPE Analytics"></img>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4 className="align-center">RPE POLSKA SP. z o.o.</h4>  
            <p className="align-center">
                Dynamicznie rozwijająca sie firma we Wrocławiu, specjalizujaca się w Analizie Danych,  Business Intelligence and Digital Transformation poszukuje kandydatów do pracy.
            </p>
            <br/> */}
            <h3 className="align-center">{data.title}</h3>
            <p className="align-center">Location: {data.location}</p>
            <p>{data.description}</p>
            <h4>Responsibilities</h4>
            <ul>
                {
                    data.responsibilities.map(d => (
                        <li>{d}</li>
                    ))
                }
            </ul>
            <h4>Requirenments</h4>
            <ul>
                {
                    data.skills.map(d => (
                        <li>{d}</li>
                    ))
                }
            </ul>
            <h4>Doceniamy</h4>
            <ul>
                {
                    data.extraSkills.map(d => (
                        <li>{d}</li>
                    ))
                }
            </ul>
            <h4>Będąc z nami zyskasz</h4>
            <ul>
                {
                    data.benefits.map(d => (
                        <li>{d}</li>
                    ))
                }
            </ul>

            <p className="align-center">Jeżeli jesteś zainteresowany/a, wyślij swoje CV poprzez przycisk aplikowania.</p>
          </Modal.Body>
          <div className="send-cv-wrapper">
            <button id="send-cv" onClick={handleSend}>Send CV</button>
          </div>
        </Modal>
      </>
    );
}
