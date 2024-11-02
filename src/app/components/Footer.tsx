import Link from "next/link";

export default function Footer() {
    return (
      <div className="main-container">
        <div className="footer-logo">
          <img src="Group 11 1.png" alt="" />
        </div>
        <div className="footer-heading">
          <Link href={"/"}>Information</Link>
          <Link href={"/"}>Contacts</Link>
          <Link href={"/"} className="social">
            Social Media
          </Link>
        </div>
        <div className="footer-vectors">
          <img src="Vector (2).png" alt="" />
          <img src="Group.png" alt="" />
          <img src="Group (1).png" alt="" />
        </div>
        <div className="social-links">
          <img src="facebook.png" alt="" />
          <img src="twitter.png" alt="" />
          <img src="Linked In.png" alt="" />
          <img src="pininterest.png" alt="" />
        </div>
        <div className="footer-contact footer-links">
          <p>1234 Sample Street Austin Texas 78704</p>
          <p>512.333.2222</p>
          <p>sampleemail@gmail.com</p>
        </div>
        <div className="footer-links">
          <Link href={"/"}>Main</Link>
          <Link href={"/"}>Gallery</Link>
          <Link href={"/"}>Projects</Link>
          <Link href={"/"}>Certifications</Link>
          <Link href={"/"}>Contacts</Link>
        </div>
        <div className="line">
          <p className="line-text">&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>
    );
}