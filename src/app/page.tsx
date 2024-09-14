import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto">
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <a href="/instagram">Intagram</a>
        </li>
        <li>
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul>
    </div>
  );
}
