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
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "/hospital";
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
          "url(https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1200&fit=crop&crop=faces)",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          id="sawo-container"
          style={{
            height: "300px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h1>Victus</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
