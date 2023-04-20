import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate, useNavigate } from 'react-router-dom';
import StyledButton from '../public/Button';

function ModalLogout() {
  const [show, setShow] = useState(false);
  const [yess, setYes] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setYes(true);
  }
  const handleShow = () => {
    setShow(true);
  }
  const handleYes=()=> {
    navigate('/login')
  }
  

  return (
    <>
      <StyledButton onClick={handleShow}>Logout</StyledButton>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
          <Modal.Title className='align-items-center' ><h4>Logout</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>Do you want to logout</h5></Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button variant="danger" onClick={handleYes}>
          Yes
        </Button>
        <Button variant="primary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalLogout;