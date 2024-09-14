import { Button, Row, Table } from "react-bootstrap";
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProps {
  blogs: IBlog[];
}
export default function AppTable(props: IProps) {
  const { blogs } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Tables Blogs</h1>
        <Button
          variant="success"
          onClick={() => {
            setShowModal(true);
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
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button variant="primary">View</Button>

                  <Button className="mx-3" variant="danger">
                    Delete
                  </Button>
                  <Button variant="warning">Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
