import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  console.log("Header component rendered", logo);
  return (
    <header id="main-header">
      <Link href="/">
        <Image src={logo} alt="Mobile phone with posts feed on it" priority />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
