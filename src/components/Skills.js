import meter1 from "../assets/img/html-icon.svg";
import meter2 from "../assets/img/css-icon.svg";
import meter3 from "../assets/img/javascript-programming-language-icon.svg";
import meter4 from "../assets/img/unity-game-engine-icon.svg";
import meter5 from "../assets/img/c-sharp-programming-language-icon.svg";
import meter6 from "../assets/img/python-programming-language-icon.svg";
import meter7 from "../assets/img/adobe-photoshop-icon.svg";
import meter8 from "../assets/img/react-js-icon.svg";
import meter9 from "../assets/img/aws-icon.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In the skills section of my portfolio, I present a diverse range of technical proficiencies essential for modern software development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
