"use client";

import React from "react";

import { useState, useEffect } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import useSWR from "swr";
import { mutate } from "swr";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (v: boolean) => void;
  blog: IBlog | null;
  setBlog: (v: IBlog | null) => void;
}
function UpdateModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props;

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  const handleUpdate = () => {
    if (!title || !author || !content) {
      toast.error("Input is not empty !");
      return;
    }
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.warning("Update Blog success !...~");
          handleClose();
          mutate("http://localhost:8000/blogs");
        }
      });
  };

  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setBlog(null);
    setShowModalUpdate(false);
  };

  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update A Blog</Modal.Title>
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
          <Button variant="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
