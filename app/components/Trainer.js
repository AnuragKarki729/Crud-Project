import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Trainer.module.css'; // Import CSS module for styles
import Link from 'next/link'; // Import Next.js Link component

const Trainer = ({ trainer }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.trainerCard}>
      <img
        src={trainer.imgUrl}
        alt={trainer.name}
        className="img-thumbnail"
        style={{ width: '400px' }}
      />

      <div>
        <h2>{trainer.name}</h2>
        <b>
          <p>Age: {trainer.age}</p>
          <p>Phone Number: {trainer.phone}</p>
          <p>Type: {trainer.type}</p>
          <p>Years of Experience: {trainer.expYears}</p>
        </b>

        <div style={{ float: 'left' }}>
          <Link href={`/book/${trainer._id}`} passHref>
            <button className="btn btn-primary">Book Trainer</button>
          </Link>
          <Button className="btn btn-primary" onClick={handleShow}>
            View Details
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{trainer.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{trainer.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Trainer;