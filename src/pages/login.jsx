import React, { useEffect, useHistory } from "react";
import Sawo from "sawo";

const LoginPage = () => {
  useEffect(() => {
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      // Add the API key copied from 5th step
      apiKey: "ad4a34b0-1f5c-4004-b0ba-db84d2a1f460",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload) => {
        // you can use this payload for your purpose
        //console.log(payload);
        window.location.href = "/home";
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div
      className="login-block"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="login-sawo-container"
        style={{
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="login-logo"
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "4px 4px 0 0",
            padding: "60px",
            textAlign: "center",
          }}
        >
          LOGO
        </div>
        <div
          id="sawo-container"
          style={{
            height: "300px",
            width: "300px",
          }}
        ></div>
        <div className="login-socials">
          <ul
            style={{
              display: "grid",
              textAlign: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
              listStyle: "none",
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "0 0 4px 4px",
              padding: "30px",
            }}
          >
            <li>
              <img
                src="https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg"
                width="40px"
                height="40px"
              />
            </li>
            <li>
              <img src="assets/github_logo.png" width="40px" height="40px" />
            </li>
            <li>
              <img
                src="https://w7.pngwing.com/pngs/872/50/png-transparent-computer-icons-social-media-logo-twitter-social-media-blue-logo-social-media-thumbnail.png"
                width="40px"
                height="40px"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
