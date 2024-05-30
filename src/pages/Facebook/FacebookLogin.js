import React, { useState } from "react";
import "./FacebookLogin.css";

const FacebookLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Email ya da Telefon numarası:", username);
    console.log("Password:", password);
  };

  return (
    <div className="fb">
      <img
        className="fb_Logo"
        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        alt="Facebook Logo"
      />
      <div className="fb_container">
        <h3>Facebook'a Giriş Yap</h3>

        <form onSubmit={handleSubmit}>
          <center>
            <input
              type="text"
              placeholder="E-posta veya Telefon Numarası"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="fb_loginb">
              Giriş Yap
            </button>
          </center>
          
          <center>
            <div className="sideInfo">
              <h5><a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Hesabını mı unuttun?</a></h5>
              <h5 className="dot">·</h5>
              <h5 className="fb_sign"><a href="https://www.facebook.com/r.php?locale=tr_TR&display=page">Facebook'a Kaydol</a></h5>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default FacebookLogin;
