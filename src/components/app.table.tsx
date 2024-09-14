import { Button, Table } from "react-bootstrap";

interface IProps {
  blogs: IBlog[];
}
export default function AppTable(props: IProps) {
  const { blogs } = props;

  return (
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
  );
}
