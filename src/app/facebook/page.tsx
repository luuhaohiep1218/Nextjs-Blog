"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function Facebook() {
  const router = useRouter();
  const handleBtn = () => {
    /// <reference path="" />
    router.push("/");
  };
  return (
    <div>
      Facebook
      <div>
        <Button variant="success" onClick={() => handleBtn()}>
          Back Home
        </Button>
      </div>
    </div>
  );
}
