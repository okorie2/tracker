import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Button } from "../components/Buttons/Button";
import { Theme } from "../styles/theme/theme";
import { UseTheme } from "../hooks/useTheme";
import Three from "../public/assets/svgs/threedtots.svg";
import Logo from "../public/assets/svgs/logo.svg";
import Marni from "../public/assets/svgs/Marni.svg";
import Man from "../public/assets/svgs/Man.svg";
import Check from "../public/assets/svgs/check.svg";

import Person from "../public/assets/svgs/person.svg";
import Lock from "../public/assets/svgs/lock.svg";
import Server from "../public/assets/svgs/server.svg";

import { ButtonOutline } from "../components/Buttons/ButtonOutline";
import { ButtonHighlight } from "../components/Buttons/ButtonHighlight";
import { Homestyle, Mid } from "../styles/screens/homestyle";

export default function Home() {
  if (typeof window !== "undefined") {
    localStorage?.setItem("themes", JSON.stringify(Theme));
  }

  const { themeLoaded, themeMode, toggleTheme, theme } = UseTheme();
  console.log(themeMode, "current theme");
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Track-er</title>
            <meta name="description" content="Track your daily activities" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300;1,400&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Homestyle.Topnav>
            <div className="img">
              <Image src={Three} alt={"threedots"} width={70} />
            </div>
          </Homestyle.Topnav>
          <Homestyle.Nav>
            <div>
              <Image src={Logo} alt={"logo"} width={140} />
            </div>
            <div>About</div>
            <div>Terms</div>
            <div>Features</div>
            <div>Contact us</div>
            <div>
              {" "}
              <ButtonOutline>Sign in</ButtonOutline>{" "}
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
              <ButtonHighlight>Create an account</ButtonHighlight>
            </div>
            <div>
              <Image src={Marni} alt={"Marni"} width={488} />
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
              <Image src={Man} alt={"Man"} width={528} />
            </div>
            <div className="tick-grid">
              {/* <h2>We provide many features you can use</h2> */}

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
          </Mid>
        </>
      </ThemeProvider>
      {/* <button onClick={toggleTheme}>switch</button>
          <Button>waiting for your lovee</Button> */}
    </>
  );
}
