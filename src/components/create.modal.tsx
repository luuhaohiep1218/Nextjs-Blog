"use client";
import { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";

interface IProps {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}

function CreateModal(props: IProps) {
  const { showModal, setShowModal } = props;

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    console.log("Check data form", title, author, content);
  };

  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Author"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Content"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
