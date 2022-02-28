import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Button } from "../styles/components/Buttons/ButtonStyle";
import { Theme } from "../styles/theme/theme";
import { UseTheme } from "../hooks/useTheme";
import Three from "../public/assets/svgs/threedtots.svg";
import Logo from "../public/assets/svgs/logo.svg";
import YtLogo from "../public/assets/svgs/tracker.svg";
import YtTrack from "../public/assets/svgs/trackerW.svg";

import Fb from "../public/assets/svgs/fb.svg";
import Github from "../public/assets/svgs/github.svg";
import Twitter from "../public/assets/svgs/twitter.svg";

import Marni from "../public/assets/svgs/Marni.svg";
import Man from "../public/assets/svgs/Man.svg";
import Check from "../public/assets/svgs/check.svg";
import Star from "../public/assets/svgs/star.svg";
import Avi1 from "../public/assets/pngs/avi1.png";
import Avi4 from "../public/assets/pngs/avi4.png";
import Avi5 from "../public/assets/pngs/avi5.png";

import Person from "../public/assets/svgs/person.svg";
import Lock from "../public/assets/svgs/lock.svg";
import Server from "../public/assets/svgs/server.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonOutline } from "../styles/components/Buttons/ButtonOutlineStyle";
import { ButtonHighlight } from "../styles/components/Buttons/ButtonHighlightStyle";
import { Homestyle, Mid } from "../styles/screens/homestyle";
import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import { CardStyle } from "../styles/components/Cards/SmCardStyle";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  if (typeof window !== "undefined") {
    localStorage?.setItem("themes", JSON.stringify(Theme));
  }

  const { themeLoaded, themeMode, toggleTheme, theme } = UseTheme();
  console.log(themeMode, "current theme");

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [width, setWidth] = useState(null);
  const [mobileView, setMobileView] = useState(null);
  // useEffect(() => {
  //   setMobileView(window.matchMedia("(max-width:900px)"));
  //   if (mobileView && mobileView.matches) {
  //     setWidth(100);
  //   } else {
  //     setWidth(40.3);
  //   }
  // }, [mobileView]);
  console.log(width, "width");

  return (
    <>
      <>
        <Homestyle.Topnav>
          <div className="img">
            <Image src={Three} alt={"threedots"} width={70} />
          </div>
        </Homestyle.Topnav>
        <Homestyle.Nav
          display={menu ? "block" : "none"}
          logo={menu ? "none" : "block"}
          onClick={toggleMenu}
        >
          <div className={menu ? "xpanded navgrid" : "navgrid"}>
            <div className="logo">
              <Image src={YtLogo} alt={"logo"} width={140} />
            </div>
            <div className={"flex"}>
              <div className="item">About</div>
              <div className="item">Terms</div>
              <div className="item">Features</div>
              <div className="item">Contact us</div>
              <div className="item btn">
                {" "}
                <Link href="/auth/signin">
                  <a>
                    <ButtonOutline>Sign in</ButtonOutline>{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="menu">{menu ? <CloseIcon /> : <MenuIcon />}</div>
          </div>
        </Homestyle.Nav>

        <Homestyle.Intro>
          <div>
            <h1>
              Tracking sleep and work has never been so easy and more secure
            </h1>
            <div className="pdiv">
              <p>Track your sleep,work and add events you wish to track</p>
            </div>
            <Link href={"/auth/signup"}>
              <a>
                <ButtonHighlight width={"60%"}>
                  Create an account
                </ButtonHighlight>
              </a>
            </Link>
          </div>
          <div>
            <Image src={Marni} alt={"Marni"} width={488} priority />
          </div>
        </Homestyle.Intro>
        <Homestyle.Stat>
          <div className="flex">
            <div>
              <Image src={Person} alt={"Person"} width={39} />
            </div>
            <div>
              <p>90+</p>
              <p>Users</p>
            </div>
            <div className="rule"></div>
          </div>

          <div className="flex">
            <div>
              <Image src={Lock} alt={"Lock"} width={39} />
            </div>
            <div>
              <p>100%</p>
              <p>Users</p>
            </div>
            <div className="rule"></div>
          </div>
          <div className="flex">
            <div>
              <Image src={Server} alt={"Server"} width={39} />
            </div>
            <div>
              <p>50+</p>
              <p>Users</p>
            </div>
            <div></div>
          </div>
        </Homestyle.Stat>
        <Mid>
          <div>
            <Image src={Man} alt={"Man"} width={528} priority />
          </div>
          <div>
            <h2>We provide many features you can use</h2>
            <div className="tick-grid">
              <div>
                <Image src={Check} alt={"check"} width={30} />
              </div>
              <div>
                <p>Track how long you work</p>
              </div>
              <div>
                <Image src={Check} alt={"check"} width={30} />
              </div>
              <div>
                <p>Track how long you sleep</p>
              </div>
              <div>
                <Image src={Check} alt={"check"} width={30} />
              </div>
              <div>
                <p>Track how long you excercise</p>
              </div>
              <div>
                <Image src={Check} alt={"check"} width={30} />
              </div>
              <div>
                <p>Track how long you study</p>
              </div>
              <div>
                <Image src={Check} alt={"check"} width={30} />
              </div>
              <div>
                <p>Add events you’d like to track</p>
              </div>
            </div>
          </div>
        </Mid>
        <Homestyle.Comment>
          <div className="top">
            <h2>Trusted by Thousands of Happy Customers</h2>
            <p>
              Let’s choose the package that is best for you and explore it
              joyfully and cheerfully
            </p>
          </div>

          <Carousel width={width}>
            <CarouselItem>
              <CardStyle>
                <div className="flex">
                  <div>
                    <Image src={Avi5} alt={"Avi5"} width={70} />
                  </div>
                  <div> Amaka</div>
                  <div>4.0</div>
                  <div>
                    <Image src={Star} alt={"Star"} width={30} />
                  </div>
                </div>
                <div>
                  <p>
                    I feel more at peace knowing that I work more than I sleep
                  </p>
                </div>
              </CardStyle>
            </CarouselItem>
            <CarouselItem>
              <CardStyle>
                <div className="flex">
                  <div>
                    <Image src={Avi1} alt={"Avi1"} width={70} />
                  </div>
                  <div> Ella</div>
                  <div>4.0</div>
                  <div>
                    <Image src={Star} alt={"Star"} width={30} />
                  </div>
                </div>
                <div>
                  <p>
                    I feel more at peace knowing that I work more than I sleep
                  </p>
                </div>
              </CardStyle>
            </CarouselItem>
            <CarouselItem>
              <CardStyle>
                <div className="flex">
                  <div>
                    <Image src={Avi4} alt={"Avi4"} width={70} />
                  </div>
                  <div> Lucy</div>
                  <div>4.0</div>
                  <div>
                    <Image src={Star} alt={"Star"} width={30} />
                  </div>
                </div>
                <div>
                  <p>
                    I feel more at peace knowing that I work more than I sleep
                  </p>
                </div>
              </CardStyle>
            </CarouselItem>
            <CarouselItem>
              <CardStyle>
                <div className="flex">
                  <div>
                    <Image src={Avi5} alt={"Avi5"} width={70} />
                  </div>
                  <div> Amaka</div>
                  <div>4.0</div>
                  <div>
                    <Image src={Star} alt={"Star"} width={30} />
                  </div>
                </div>
                <div>
                  <p>
                    I feel more at peace knowing that I work more than I sleep
                  </p>
                </div>
              </CardStyle>
            </CarouselItem>
          </Carousel>
        </Homestyle.Comment>

        <Homestyle.FormContainer>
          <div className="text">
            <h2>We’ll answer all your questions</h2>
            <p>
              Questions or complaints? Drop a message and our support team will
              get back to you within 24 hours.
            </p>
          </div>
          <div className="form">
            <form>
              <div className="flex">
                <div>
                  <input type="text" placeholder="First Name" />
                </div>
                <div>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <input type="text" placeholder="Email Address" />
              </div>
              <div>
                <input type="text" placeholder="Write your question" />
              </div>
              <div>
                <ButtonHighlight width={"34%"} padding={"1.3em 0.8em"}>
                  Send Now
                </ButtonHighlight>
              </div>
            </form>
          </div>
        </Homestyle.FormContainer>

        <Homestyle.Footer>
          <div>
            <Image src={YtTrack} alt="YtLogo" />
          </div>

          <div className="grid">
            <div>
              <div>
                <h3>Menu</h3>
              </div>
              <div>
                <p>About</p>
              </div>
              <div>
                <p>Business</p>
              </div>
              <div>
                <p>FAQS</p>
              </div>
              <div>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <div>
                <h3>LEGAL</h3>
              </div>
              <div>
                <p>Terms and Conditions</p>
              </div>
              <div>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div>
              <div>
                <h3>SUPPORT</h3>
              </div>
              <div>
                <p>Help</p>
              </div>
              <div>
                <p>Email</p>
              </div>
            </div>
            <div>
              <div>
                <h3>CONNECT WITH US</h3>
              </div>
              <div className="icon">
                <div>
                  <Image src={Fb} alt="fb" />
                </div>
                <div>
                  <Image src={Twitter} alt="Twitter" />
                </div>
                <div>
                  <Image src={Github} alt="Github" />
                </div>
              </div>
            </div>
          </div>
        </Homestyle.Footer>
      </>
      {/* <button onClick={toggleTheme}>switch</button>
          <Button>waiting for your lovee</Button> */}
    </>
  );
}
