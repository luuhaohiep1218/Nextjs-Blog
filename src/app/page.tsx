"use client";
import Link from "next/link";
import { Container } from "react-bootstrap";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res:", data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Container>
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </Container>
  );
}
