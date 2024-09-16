"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetail = ({ params }: { params: { id: number } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <Link href={"/blogs"}>Go back</Link>
      <Card className="text-center">
        <Card.Header className="text-2xl">{data?.title}</Card.Header>
        <Card.Body>
          <Card.Text className="text-base/6">{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Author : {data?.author}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetail;
