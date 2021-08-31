import React, { useEffect } from "react";
import Sawo from "sawo";

const LoginPage = () => {
  useEffect(() => {
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key copied from 5th step
      apiKey: "ad4a34b0-1f5c-4004-b0ba-db84d2a1f460",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload) => {
        // you can use this payload for your purpose
        console.log(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div>
      <div
        id="sawo-container"
        style={{ height: "300px", width: "300px" }}
      ></div>
    </div>
  );
};

export default LoginPage;
