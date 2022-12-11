// React Need
import React, { useEffect, useState } from "react";
import axios from "axios";
// Component
// import NavbarTop from "../components/NavbarTop";
// import FooterBot from "../components/FooterBot";
// import HeaderImg from "../components/HeaderImg";
// Style
import { Row } from "react-bootstrap";
import "../../style/bkk-detail.css";

function DetailBkk(props) {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // const client = axios.create({
  //   baseURL: "http://localhost:5000/jobs",
  // });

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobDetail();
  });

  const getJobDetail = async () => {
    await axiosInstance.get(props.bkkId).then((response) => {
      setJobs(response.data.result);
    });
  };

  return (
    <>
      {jobs.map((job) => {
        return (
          <>
            <Row className="bkkdetail-title">
              <img
                src={`${baseURLAPI}/${job.company_logo.replace("\\", "/")}`}
                className="dbkk-img"
                alt="company-logo"
              />
              <h1>{job.company_name}</h1>
              <span className="status st-open my-3">{job.job_status}</span>
            </Row>
            <Row className="bkkdetail-body">
              <div className="detail-intro">{job.job_short_desc}</div>
              <div className="bkk-d-desc">
                <h2>JOB REQUIREMENT : </h2>
                <p>{job.job_requirement}</p>
              </div>
              <div className="bkk-d-desc">
                <h2>JOB DESCRIPTION : </h2>
                <p>{job.job_desc}</p>
              </div>
              <div className="bkk-d-desc">
                <h2>COMPANY ADDRESS : </h2>
                <p>{job.company_address}</p>
              </div>
            </Row>
          </>
        );
      })}
    </>
  );
}

export default DetailBkk;
