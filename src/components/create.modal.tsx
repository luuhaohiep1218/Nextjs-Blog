"use client";

import React from "react";

import { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { mutate } from "swr";

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
    if (!title || !author || !content) {
      toast.error("Input is not empty !");
      return;
    }

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Create success !...~");
          handleClose();
          mutate("http://localhost:8000/blogs");
        }
      });
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
