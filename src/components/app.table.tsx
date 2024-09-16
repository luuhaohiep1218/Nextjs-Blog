"use client";
import { useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import CreateModal from "./create.modal";
import UpdateModal from "./update.modal";
import Link from "next/link";

interface IProps {
  blogs: IBlog[];
}
export default function AppTable(props: IProps) {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Tables Blogs</h1>
        <Button
          variant="success"
          onClick={() => {
            setShowModalCreate(true);
          }}
        >
          Add
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`/blogs/${item.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>

                  <Button className="mx-3" variant="danger">
                    Delete
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setShowModalUpdate(true);
                      setBlog(item);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </div>
  );
}
