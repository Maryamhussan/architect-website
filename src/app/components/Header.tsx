import Link from "next/link";

export default function Header() {
    return (
      <div className="header">
        <div className="logo">
          {" "}
          <img src="logo.png" alt="" />
        </div>
        <div className="links">
          <div className="link">
            <Link href="/">MAIN</Link>
          </div>
          <div className="link">
            {" "}
            <Link href="/gallery">GALLERY</Link>
          </div>
          <div className="link">
            {" "}
            <Link href="/projects">PROJECTS</Link>
          </div>
          <div className="link">
            <Link href="/contacts">CERTIFICATIONS</Link>
          </div>
          <div className="link">
            {" "}
            <Link href="/certifications">CONTACTS</Link>
          </div>
        </div>
        {/* <div className="header4">
          <ul className="menu4">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div> */}
      </div>
    );
}