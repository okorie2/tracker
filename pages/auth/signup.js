import Image from "next/image";
import React from "react";

import {
  Inp,
  SignupContainer,
} from "../../styles/screens/authStyle/signupStyle";
import Ikbal from "../../public/assets/svgs/Ikbal5.svg";
import Google from "../../public/assets/svgs/Google.svg";
import Facebook from "../../public/assets/svgs/Facebook.svg";
import Apple from "../../public/assets/svgs/apple.svg";

import { ButtonHighlight } from "../../styles/components/Buttons/ButtonHighlightStyle";
import Head from "next/head";
import Link from "next/link";

export default function signup() {
  return (
    <>
      <SignupContainer>
        <div className="left">
          {/* <div>hey</div> */}
          <Image src={Ikbal} alt="Ikbal" width={638} priority />
        </div>
        <div className="right">
          <div className="form-container">
            <h1>SIGN UP</h1>
            <p>Sign up and start tracking today</p>
            <div>
              <Inp
                type="text"
                placeholder="Name"
                rad="15px"
                imgUrl={"/assets/svgs/user.svg"}
              />
            </div>
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
            <div className="rw-cont">
              <div className="rw">
                <div className="btn">
                  <ButtonHighlight> Sign Up</ButtonHighlight>
                </div>
                <div>
                  <h4>Have an account? </h4>{" "}
                  <span>
                    <Link href={"/auth/signin"}>
                      <a> Sign In </a>
                    </Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="wrap-cont">
              <div className="wrap">
                <div className="border"></div>
                <div>Sign Up with</div>
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
      </SignupContainer>
    </>
  );
}
