import React, { Component } from "react";
// import mojabetLogo from "../../assets/photos/mojabet-410x50_copy.png";
// import vectSmart from "../../assets/photos/Vector_Smart_Object_copy_5.png";
// import pick3 from "../../assets/photos/Pick3_selected_1.png";
// import instaloto from "../../assets/photos/Insta_Lotto_1.png";
// import globalbet from "../../assets/photos/Frame.png";
// import cash5 from "../../assets/photos/Vector.png";
// import dice from "../../assets/photos/dice.png";
// import sports from "../../assets/photos/sports.png";

export default class Header extends Component {
  render() {
    return (
      <>
{/*        
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

          <img src={sports} alt="" />
          <a href="#" className="link">
            MOJASPORT
          </a>

          <div className="divider_menu"></div>

          <img src={globalbet} alt="" />
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

          <img src={cash5} alt="" />
          <a href="#" className="link">
            CASH 5
          </a>

          <div className="divider_menu"></div>

          <img src={dice} alt="" />
          <a href="#" className="link">
            CHANCE GAMES
          </a>
          <div className="divider_menu"></div>
        </div>
        */}

        <div className="flex">
          <div className="col one">
            <div className="logo-container">
              <div className="image-content one" />
              <label>
                AFRICAN
                <br />
                EXPLORER
              </label>
            </div>
            <a href="/explorer" className="login-link">
              LOG IN
              <br />
              TO PLAY!
            </a>
            <div className="image-content one_2" />
          </div>
          
          <div className="col two">
            <div className="logo-container">
              <div className="image-content two" />
              <label>AFRICA FRUIT</label>
            </div>
            <a href="/africafruit" className="login-link">
              LOG IN
              <br />
              TO PLAY!
            </a>
            <div className="image-content two_2" />
          </div>
          

          <div className="col three">
            <div className="image-content three" />
            <a href="/lucky7" className="login-link">
              LOG IN
              <br />
              TO PLAY!
            </a>
            <div className="image-content three_2" />
          </div>

          <div className="col fourth">
            <div className="image-content fourth" />
            <a href="/spinn" className="login-link">
              LOG IN
              <br />
              TO PLAY!
            </a>
            <div className="image-content fourth_2" />
          </div>

        </div>
       
      </>
    );
  }
}
