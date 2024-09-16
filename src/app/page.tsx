import Link from "next/link";
import { Container } from "react-bootstrap";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import BlogsPage from "./blogs/page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Home page description",
};

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res:", data);
  //   };
  //   fetchData();
  // }, []);

  return <div></div>;
}
