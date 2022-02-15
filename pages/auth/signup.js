import Image from "next/image";
import React from "react";
import { SignupContainer } from "../../styles/screens/authStyle/signupStyle";
import Marni from "../../public/assets/svgs/Marni 2.svg";
import Ikbal from "../../public/assets/svgs/Ikbal 5.svg";
import { ButtonHighlight } from "../../styles/components/Buttons/ButtonHighlightStyle";

export default function signup() {
  return (
    <>
      <SignupContainer>
        <div className="left">
          <Image src={Ikbal} alt="Ikbal" width={638} />
        </div>

        <div className="right">
          <h1>SIGN UP</h1>
          <p>Sign up and start tracking today</p>
          <div>
            <input type="search" placeholder="Name" />
          </div>
          <div>
            <input type="search" placeholder="Email Address" />
          </div>
          <div>
            <input type="search" placeholder="Password" />
          </div>
          <div className="rw">
            <div>
              <ButtonHighlight padding="1em 4em"> Sign Up</ButtonHighlight>
            </div>
            <div>
              <p>Have an account?</p>{" "}
            </div>
            <div>Sign In</div>
          </div>
          <div>
            <div>border</div>
            <div>Sign Up with</div>
            <div>border</div>
            <div>Google</div>
            <div>Apple</div>
            <div>Fb</div>
          </div>
        </div>
      </SignupContainer>
    </>
  );
}
