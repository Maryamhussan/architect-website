import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div id="main-page">
      <Header />
      <div className="main">
        <img src="mainimage.png" id="mainimage"></img>
        <h1>PROJECT</h1>
        <span>Lorum</span>
        <div className="frames">
          <div className="frame1">
            <img src="arrow-2-right-long (2).svg" alt="" className="ar1" />
          </div>
          <div className="frame2">
            <img src="arrow-2-right-long (2).svg" alt="" className="ar2" />
          </div>
        </div>
        <div className="date">
          <p>
            0 / 02<br></br>1
          </p>
        </div>
        <div className="box">
          <p className="box-text">
            <Link href={"#project"}>View Project</Link>
          </p>
          <img src="arrow-2-right-long.svg" className="box-arrow"></img>
        </div>
      </div>

      <div className="about-imgage">
        <img src="Rectangle 8.png" alt="" className="img-1" />
        <img src="Rectangle 9.png" alt="" className="img-2" />
        <img src="Rectangle 10.png" alt="" className="img-3" />
      </div>
      <div id="about-text">
        <h2>About</h2>
        <p className="about-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>
          <div className="box2">
            <p className="box2-text">Read More</p>
            <img src="arrow-2-right-long.svg" className="box2-arrow"></img>
          </div>
        </button>
        <h3 className="mission">Main Focus/Mission Statement</h3>
        <h4 className="head1">1</h4>
        <p className="missionpara1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat.
        </p>
        <h4 className="head2">2</h4>
        <p className="missionpara2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat, magna mauris porttitor
          tortor, a auctor est felis ut nisl.
        </p>

        <h4 className="projects" id="project">
          Our Projects
        </h4>
        <div className="project-image">
          <img src="Rectangle 12.png" alt="" className="project-image1" />
          <div className="project-image1-rectangle"></div>
          <p className="project-text">Sample Project</p>
          <button>
            <p className="project-text-2">View More</p>
            <img src="arrow-2-right-long.png" className="project-arrow" />
          </button>
          <img src="image 15.png" alt="" className="project-image2" />
          <img src="image 16.png" alt="" className="project-image3" />
          <img src="image 17.png" alt="" className="project-image4" />
          <img src="image 18.png" alt="" className="project-image5" />
        </div>
        <button>
          <div className="project-box">
            <p className="pr-text">All Projects</p>
            <img src="arrow-2-right-long.png" className="project-arrow2" />
          </div>
        </button>
      </div>

      <h4 className="contact-heading">Contact Us</h4>
      <img src="image 12.png" alt="" className="contact-img" />
      <form action="" method="post" className="contact">
        <input type="text" className="name" placeholder="Name" />
        <input
          type="tel"
          className="number"
          placeholder="Phone Number"
          required
        />
        <input type="email" className="email" placeholder="E-mail" required />
        <input type="text" className="interested" placeholder="Interested In" />
        <textarea
          className="message"
          placeholder="Message"
          rows={6}
          cols={6}
          required
        />
        <button type="submit">
          <div className="project-box contact-btn">
            <p className="pr-text">Send Email</p>
            <img src="arrow-2-right-long.png" className="project-arrow2" />
          </div>
        </button>
      </form>
      <Footer />
    </div>
  );
}
