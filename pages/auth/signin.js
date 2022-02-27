import Image from "next/image";
import React from "react";

import { Inp } from "../../styles/screens/authStyle/signupStyle";
import Ikbal from "../../public/assets/svgs/Ikbal5.svg";
import Marni from "../../public/assets/svgs/Marni2.svg";

import Google from "../../public/assets/svgs/Google.svg";
import Facebook from "../../public/assets/svgs/Facebook.svg";
import Apple from "../../public/assets/svgs/apple.svg";

import { ButtonHighlight } from "../../styles/components/Buttons/ButtonHighlightStyle";
import Head from "next/head";
import Link from "next/link";
import { SigninContainer } from "../../styles/screens/authStyle/signinStyle";

export default function signup() {
  return (
    <>
      <Head>
        <title>Track-er</title>
        <meta name="description" content="Track your daily activities" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SigninContainer>
        <div className="left">
          {/* <div>hey</div> */}
          <Image src={Marni} alt="Marni" width={638} />
        </div>
        <div className="right">
          <div className="form-container">
            <h1>SIGN IN</h1>
            <p>Welcome back! You've been missed.</p>
            {/* <div>
              <Inp
                type="text"
                placeholder="Name"
                rad="15px"
                imgUrl={"/assets/svgs/user.svg"}
              />
            </div> */}
            <div>
              <Inp
                type="text"
                placeholder="Email Address"
                imgUrl={"/assets/svgs/mail.svg"}
                rad="15px"
              />
            </div>
            <div>
              <Inp
                type="text"
                placeholder="Password"
                rad="15px"
                imgUrl={"/assets/svgs/eye.svg"}
              />
            </div>
            <div className="forgot">
              <label>
                <Link href={"/auth/forgotpassword"}>
                  <a>Forgot Password?</a>
                </Link>
              </label>
            </div>
            <div className="rw-cont">
              <div className="rw">
                <div className="btn">
                  <ButtonHighlight> Sign In</ButtonHighlight>
                </div>
                <div>
                  <h4>Don&apos;t have an account? </h4>{" "}
                  <span>
                    <Link href={"/auth/signup"}>
                      <a> Sign Up </a>
                    </Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="wrap-cont">
              <div className="wrap">
                <div className="border"></div>
                <div>Continue with</div>
                <div className="border"></div>
              </div>
              <div className="wrap">
                <div className="box">
                  <Image src={Google} alt="google" width={53} />
                </div>
                <div className="box-fill">
                  <Image src={Apple} alt="apple" width={53} />
                </div>
                <div className="box">
                  <Image src={Facebook} alt="fb" width={53} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SigninContainer>
    </>
  );
}
