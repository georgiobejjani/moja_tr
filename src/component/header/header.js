import React, { Component } from "react";
import mojabetLogo from "../../assets/photos/mojabet-410x50_copy.png";
import vectSmart from "../../assets/photos/Vector_Smart_Object_copy_5.png";
import pick3 from "../../assets/photos/Pick3_selected_1.png";
import instaloto from "../../assets/photos/Insta_Lotto_1.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header__container">
            <div className="logo">
              <div className="logo__mojabet ">
                <img src={mojabetLogo} alt="" />
              </div>
              <div className="logo__smart">
                <img src={vectSmart} alt="" />
              </div>
            </div>

            <div className="header__login">
              <div className="username__container">
                <div className="username__label">Username</div>
                <input
                  className="username__input"
                  type="text"
                  name="username"
                />
                <br />
                <a className="link__forgot" href="#">
                  Forgot Password
                </a>
              </div>

              <div className="password__container">
                <div className="password__label">Password</div>
                <input
                  className="password__input"
                  type="password"
                  name="password"
                />
                <br />
                <a className="link__register" href="#">
                  Register
                </a>
              </div>
              <button className="btn__login">Login</button>
            </div>
          </div>
        </div>

        <div className="menu_container">

          <div className="divider_menu"></div>

          <img src={pick3} alt="" />
          <a href="#" className="link">
            MOJASPORT
          </a>

          <div className="divider_menu"></div>

          <img src={pick3} alt="" />
          <a href="#" className="link">
            GLOBAL.BET
          </a>

          <div className="divider_menu"></div>

          <img src={instaloto} alt="" />
          <a href="#" className="link">
            INSTALOTTO
          </a>

          <div className="divider_menu"></div>

          <img src={pick3} alt="" />
          <a href="#" className="link">
            PICK 3
          </a>

          <div className="divider_menu"></div>

          <img src={pick3} alt="" />
          <a href="#" className="link">
            CASH 5
          </a>

          <div className="divider_menu"></div>

          <img src={pick3} alt="" />
          <a href="#" className="link">
            CHANCE GAMES
          </a>
          <div className="divider_menu"></div>
        </div>
      </>
    );
  }
}
