import React from "react";
import NavbarComp from "../Components/navbar/navbarComp";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import headingBar2 from "../Components/Assets/images/headingBar2.png";
import headingBar3 from "../Components/Assets/images/headingBar3.png";
import BannerThree from "../Components/Assets/images/bannerThree.png";
import ArrowIcon from "../Components/Assets/images/arrowIcon.png";
import SmBtnOne from "../Components/buttons/SmBtnOne";
import BannerFour from "../Components/Assets/images/BannerFour.png";
import BannerFive from "../Components/Assets/images/bannerFive.png";
import PointOne from "../Components/Assets/images/pointOne.png";
import PointTwo from "../Components/Assets/images/pointTwo.png";
import PointThree from "../Components/Assets/images/pointThree.png";
import PointFour from "../Components/Assets/images/pointFour.png";
import PointFive from "../Components/Assets/images/pointFive.png";
import PointSix from "../Components/Assets/images/pointSix.png";
import MonthlyPointOne from "../Components/Assets/images/monthlyPointOne.png";
import MonthlyPointTwo from "../Components/Assets/images/monthlyPointTwo.png";
import MonthlyPointThree from "../Components/Assets/images/monthlyPointThree.png";
import MonthlyPointFour from "../Components/Assets/images/monthlyPointFour.png";
import MonthlyPointFive from "../Components/Assets/images/monthlyPointFive.png";
import MonthlyPointSix from "../Components/Assets/images/monthlyPointSix.png";
import MonthlyPointSeven from "../Components/Assets/images/monthlyPointSeven.png";
import MonthlyPointEight from "../Components/Assets/images/monthlyPointEight.png";
import MonthlyPointNine from "../Components/Assets/images/monthlyPointNine.png";
import MonthlyPointTen from "../Components/Assets/images/monthlyPointTen.png";
import headingBar from "../Components/Assets/images/headingBar.png";
import FooterApp from "../Components/footer/footer";

import "../App.css";
import styled from "styled-components";

function ScreenThree() {
  const StyleRegisterContainer = styled.div`
    @media (min-width: 0px) and (max-width: 600) {
      fontsize: "5pt";
    }
  `;

  return (
    <>
      <NavbarComp />

      <div
        class="container col-sm-12 col-md-12 mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            color: "#111640",
            textAlign: "center",
            fontSize: "24pt",
            fontFamily: "Calibri",
          }}
        >
          THE NOVEL SOLUTION TO HUMAN CAPITAL ASSESSMENT
        </Typography>
      </div>
      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div class="container col-sm-12 col-md-12 col-lg-12 mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#62180f",
              textAlign: "center",
              fontFamily: "Calibri",
              fontSize: "30pt",
            }}
          >
            Why Choose EvalzNow?
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </div>

      <div
        class="container col-md-12 col-sm-12 col-lg-12"
        style={{
          marginTop: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            fontFamily: "Calibri",
            fontSize: "18pt",
            textAlign: "center",
            letterSpacing: "0",
          }}
        >
          EvalzNow provides detailed, human capital assessments using a new
          innovative approach known as Competency Accounting. As the approach
          suggests, Competency Accounting is the measurement, the processing,
          and the communication of quantitative information and qualitative
          information regarding any performance-based entity such as students,
          employees AI humanoids, educational facilities, businesses, defense
          agencies, and so forth. The foundation of the Competency Accounting
          approach centers on grouping measurable variables into a large matrix
          to track knowledge capacity.
        </Typography>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div className="bgThreeBanner">
        <div class="container-fluid " className="bannerThree">
          <div class="row">
            <div
              class="col-lg-5 col-md-5 col-sm-5 d-flex justify-content-end     align-items-center"
              style={{ flexDirection: "column", height: "120vh" }}
            >
              <div class="container d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      fontFamily: "calibri",
                      fontWeight: "bold",
                      color: "#111640",
                    }}
                  >
                    COMPETENCY ACCOUNTING
                  </Typography>
                </div>
              </div>

              <div class="container d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      fontFamily: "calibri",
                      fontWeight: "bold",
                      color: "#111640",
                    }}
                  >
                    PERFORMANCE MONITORING
                  </Typography>
                </div>
              </div>

              <div class="container d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      fontFamily: "calibri",
                      fontWeight: "bold",
                      color: "#111640",
                    }}
                  >
                    CONGNITIVE PHSYCHOLOGY
                  </Typography>
                </div>
              </div>

              <div class="container d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      fontFamily: "calibri",
                      fontWeight: "bold",
                      color: "#111640",
                    }}
                  >
                    ADVANCED EVALUATION
                  </Typography>
                </div>
              </div>

              <div class="container d-flex justify-content-center align-items-center">
                <div class="m-3 ">
                  <SmBtnOne label="Learn More" />
                </div>
                <div class="m-2 ">
                  <SmBtnOne label="Contact Sales" />
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 "></div>
          </div>
        </div>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div
        class="container-fluid col-md-12 col-sm-12 p-3 "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#62180f",
            textAlign: "center",
            fontFamily: "Calibri",
            fontSize: "30pt",
          }}
        >
          How Can Anyon Deny EvalzNow?
        </Typography>
      </div>

      <div
        class="container col-sm-12 col-md-12 col-lg-12"
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "black",
            fontFamily: "Calibri",
            fontSize: "18pt",
            textAlign: "center",
            letterSpacing: "0",
          }}
        >
          For decades, educational experts and governmental representatives have
          intensely debated whether proficiency or growth should be the driver
          for evaluating student learning, ranking schools, funding schools, and
          so forth. For even longer, corporates have struggled to find systems
          that comprehensively assess and track the knowledge competencies of
          their workforces, leading to the adoption of personality tests,
          appraisal systems, and annual employee performance reviews – a lot of
          unnecessary paperwork and useless efforts!
        </Typography>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div class="container ">
        <div class="row">
          <div class="container col p-3">
            <div className="m-3">
              <Typography
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  color: "#621101",
                  fontSize: "30pt",
                  textAlign: "center",
                  letterSpacing: "0",
                }}
              >
                EvalzNow Building Blocks
              </Typography>
            </div>
            <div
              className="m-3 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div class="d-flex justify-content-center col-sm-12 ">
                <img src={PointOne} width="100%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={PointTwo} width="100%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={PointThree} width="100%" />
              </div>
            </div>
          </div>
          <div class="container   col p-3">
            <div className="m-3">
              <Typography
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  color: "#621101",
                  fontSize: "30pt",
                  textAlign: "center",
                  letterSpacing: "0",
                }}
              >
                EvalzNow Solution Process
              </Typography>
            </div>
            <div
              className="m-3  d-flex justify-content-center align-items-center"
              style={{
                flexDirection: "column",
              }}
            >
              <div class="d-flex justify-content-center">
                <img src={PointFour} width="100%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={PointFive} width="100%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={PointSix} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div
        class="container mt-4 col-md-12 col-lg-12 col-sm-12"
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            fontFamily: "Calibri",
            fontSize: "18pt",
            textAlign: "center",
            letterSpacing: "0",
          }}
        >
          EvalzNow is a stand-alone solution that does not require integration
          or maturation periods. Even, the interface was designed to be
          extremely user-friendly.
        </Typography>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={headingBar} width="43%" />
      </div>

      <div
        class="container-fluid col-md-12 col-sm-12 p-3 "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#62180f",
            textAlign: "center",
            fontFamily: "Calibri",
            fontSize: "30pt",
            letterSpacing: "0",
          }}
        >
          Monthly Tier Pricing Per Candidate
        </Typography>
      </div>

      <div class="container ">
        <div class="row">
          <div class="container col-md-6 col-sm-12 p-3">
            <div
              className="m-3 d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointOne} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointTwo} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointThree} width="80%" />
              </div>

              <div class="d-flex justify-content-center">
                <img src={MonthlyPointFour} width="80%" />
              </div>

              <div class="d-flex justify-content-center">
                <img src={MonthlyPointFive} width="80%" />
              </div>
            </div>
          </div>

          <div class="container col-md-6  col-sm-12 p-3">
            <div
              className="m-3  d-flex justify-content-center align-items-center"
              style={{
                flexDirection: "column",
              }}
            >
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointSix} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointSeven} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointEight} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointNine} width="80%" />
              </div>
              <div class="d-flex justify-content-center">
                <img src={MonthlyPointTen} width="80%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 d-flex justify-content-center   ">
        <div class="row">
          

          <div class="col ">
            <SmBtnOne label="Learn More" />
          </div>
          <div class="col ">
            <SmBtnOne label="Contact Sales" />
          </div>
          </div>
      
      </div>

      <div>
        <FooterApp />
      </div>
    </>
  );
}

export default ScreenThree;
