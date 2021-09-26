import React, { useState, useEffect } from "react";
import axios from "axios";
import PolicyCard from "../components/policy/policy-card";
import UserNavbar from "../components/user-navbar/user-navbar";
import { Col, Row } from "antd";

export default function PolicyInfoPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://community-healthcaregov.p.rapidapi.com/api/index.json", {
        headers: {
          "x-rapidapi-host": "community-healthcaregov.p.rapidapi.com",
          "x-rapidapi-key":
            "2373a01a8bmsh22e011d161f25b8p1e4cbdjsn7aec32a8c673",
        },
      })
      .then((response) => {
        try {
          setData(response.data);
          console.log(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      });
  }, []);

  if (loading) return <h1 className="mt-5 pt-5 text-center">loading</h1>;

  if (error) return <h1 className="mt-5 pt-5 text-center">Can't Fetch data</h1>;

  return (
    <>
      <UserNavbar />
      <div className="container-fluid p-5 mt-5 pt-5">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {data.map((info) => (
              <Col gutter={16} span={8}>
                <PolicyCard
                  img={"https://source.unsplash.com/random/200x200"}
                  title={info.title}
                  description={info.bite}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
