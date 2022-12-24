import React from "react";
import NavbarComp from "../Components/navbar/navbarComp";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import headingBar from "../Components/Assets/images/headingBar.png";
import SmBtnOne from "../Components/buttons/SmBtnOne";
import BannerOne from "../Components/Assets/images/bannerOne.png";
import "../App.css";
import FooterApp from "../Components/footer/footer";
import ArrowIcon from "../Components/Assets/images/arrowIconWhite.png";

function ScreenOne() {
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
            fontSize: "2.5rem",
            fontFamily: "Calibri",
          }}
        >
          MANAGING KNOWLEDGE CAPACITY IN EDUCATION AND INDUSTRY
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
        <img src={headingBar} width="50%" />
      </div>

      <div class="container col-sm-12 col-md-12 col-lg-12 mt-3">
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
            How Can Evalz Now Solve Your Problems?
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

      <div class="container mt-3">
        <div class="row ">
          <div class="col-lg-1 col-sm-12 col-md-12"></div>
          <div
            class="col-md-12 col-lg-5 col-sm-12    "
            style={{ borderRadius: "5px", backgroundColor: "#f0f0f0" }}
          >
            <Typography
              sx={{
                fontSize: "16pt",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Calibri",
                letterSpacing: "0px",
              }}
            >
              One particular challenge for schools and educators is the changing
              nature of student learning constructs over time. Research has
              shown that students can neither be evaluated with imprecise
              longitudinal models nor fixed proficiency criteria because
              students adapt holistically to new academic challenges and
              assuming that students learn the same is categorically false.
              After working with a disruptive software solution like EvalzNow,
              which can absorb all assessments from any teaching methodology,
              educators will discover that there are several ways to utilize the
              results to reach their objectives!
            </Typography>
          </div>
          <div
            class="col-lg-1 col-sm-12 col-md-12 "
            style={{ border: "1px solid white", backgroundColor: "white" }}
          ></div>
          <div
            class="col-md-12 col-lg-5  col-sm-12  "
            style={{ borderRadius: "15px", backgroundColor: "#f0f0f0" }}
          >
            <Typography
              sx={{
                fontSize: "16pt",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Calibri",
                letterSpacing: "0px",
              }}
            >
              Corporate and defense companies are constantly searching for
              innovative, resource management tools to assess and to track human
              competency. Such tools are not only responsible for sustaining a
              work-related eco-system that encourages top-of-the-line
              leadership, increased revenue, and success but also for developing
              a resilient educational base, preparing for local/global markets,
              and channeling lifelong career opportunities for employees. In
              essence, these companies want either to find globally competitive
              individuals or to groom their employees into them. This is where
              EvalzNow becomes handy!
            </Typography>
          </div>
        </div>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={headingBar} width="50%" />
      </div>

      <div class="container mt-5  d-flex justify-content-center align-items-center col-md-12 ">
        <div class="row  d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center w-100">
            <SmBtnOne label="Register Now" />
            <SmBtnOne label="Contact Sales" />
          </div>
        </div>
      </div>

      <div className="bgOneTop" >
        <div class="container-fluid " className="bgOneCont1">
          <div class="row">
            <div class="col-md-2 col-lg-7  "></div>
            <div class="col-md-8 col-lg-5    mt-5">
              <div class="d-flex   align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <div
                    style={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Provide complete oversight of knowledge capacity to execs,
                    government, and regulators
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Provide live updates of employes performance for
                    constructivefeedback.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Eliminate performance reviews paperworks, easing HR
                    workloads.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Identity underperforming & overperforming employees.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Replace systems driven by personality tests, appraisals, and
                    interpersonal relationships.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Track the productivity rates and utilization rates of
                    employees.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Serve as resolution vehicles when investigating company
                    disputes.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Reveal the need for training or training
                    imporovements/effectiveness.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Support the upward mobility process as well as promotions,
                    bonuses, and/or speed-tracking
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Maintain a comrehensive record of employement activities
                    across an unlimited period
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Track the conditions (program status + time impact)
                    associated with a task
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Support advanced psychometrics, NLP, R&D efforts, and
                    intelligience training
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-3">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-3">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Support any KPI that is a function of knowledge capacity and
                    human competence.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
        {/* 
        -------------------------------------------------------------
        ============================================================= */}

        <div
          class="container-fluid"
          
          style={{ marginTop: "20rem" }}
        >
          <div class="row" >
            <div class="col-md-5 col-lg-5 " className="bgOneCont2">
              <div class="d-flex col-lg-5 col-md-12  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Collaborate with Professional colleagues to support learning
                    objectives.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Set complex pass/fail thresholds that incorporate both,
                    profiecieny <br /> and growth.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Overhaul educational policy on grading and assessments.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Track socoeconomics as a function of competency.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Design effective lessons to teach a larger range of
                    students.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Respond to learning difficulties in a timely, yet
                    objectives, way.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Hold students and intructors accountable throughout <br />{" "}
                    the learning process
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Conduct comparatives analysis at the student/class/ <br />{" "}
                    institutions level
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Determine how students can be <br /> reasonably challenged.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Determine how students can be scaffolded <br />{" "}
                    individually.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Track student engagement in the class
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Maintain a comprehenive record of student <br /> knowledge
                    across any period
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Reports student progress to administrators and parents{" "}
                    <br /> for feedback.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Reflects on current practice to determine if the needs of{" "}
                    <br /> students are being met.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Modify and refine teaching approaches alongside quantative{" "}
                    <br />
                    observation
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Make growth projections based on evidence
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Reach calculated growth targets based on studnets-centered
                    results.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Map benchmarks and performance points to trace out Needs
                    Assessments paths.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Associate brain area indincators to performance for
                    neuroscience studies.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}

              {/* --------------------------------------------------------------------------- */}
              <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>

                <div class="m-2">
                  <Typography
                    sx={{
                      fontSize: "18pt",
                      fontFamily: "calibri",
                      letterSpacing: "0",
                      color: "white",
                    }}
                  >
                    Identify overperforming and underperforming students.
                  </Typography>
                </div>
              </div>
              {/* --------------------------------------------------------------------------- */}
            </div>

            <div class="col-md-7 col-lg-7   "></div>
          </div>
        </div>
      </div>

      <div class="container-fluid" className="bgOneCenter">
        {/* <img src={BannerOne} width="100%" /> */}
      </div>

      <div class="container-fluid " className="bgOneBottom">
        {/* <img src={BannerOne} width="100%" /> */}
      </div>

      {/* this part is removed by owner choice */}

      {/* <div class="container">
        <div class="col-md-12 col-sm-12 mt-2">
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#62180f",
              textAlign: "center",
              fontFamily: "Calibri",
              fontSize: "35pt",
            }}
          >
            Frequently Asked Questions
          </Typography>
        </div>
      </div> */}

      {/* <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center align-items-center">
              <div class="m-3">
                <img src={starIcon} width="40px" />
              </div>
              <div
                class="d-flex m-3"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div>
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      color: "#62180f",
                      fontWeight: "bold",
                      fontFamily: "Calibri",
                    }}
                  >
                    Question # 01?
                  </Typography>
                </div>

                <div>
                  <Typography sx={{ fontSize: "14pt" }}>
                    Answer: One particular challenge for schools and educators
                    is the changing nature of student learning constructs over
                    time.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="d-flex justify-content-center align-items-center ">
              <div class="m-3">
                <img src={starIcon} width="40px" />
              </div>
              <div
                class="d-flex m-3"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div>
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      color: "#62180f",
                      fontWeight: "bold",
                      fontFamily: "Calibri",
                    }}
                  >
                    Question # 02?
                  </Typography>
                </div>

                <div>
                  <Typography sx={{ fontSize: "14pt" }}>
                    Answer: One particular challenge for schools and educators
                    is the changing nature of student learning constructs over
                    time.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center align-items-center">
              <div class="m-3">
                <img src={starIcon} width="40px" />
              </div>
              <div
                class="d-flex m-3"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div>
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      color: "#62180f",
                      fontWeight: "bold",
                      fontFamily: "Calibri",
                    }}
                  >
                    Question #3?
                  </Typography>
                </div>

                <div>
                  <Typography sx={{ fontSize: "14pt" }}>
                    Answer: One particular challenge for schools and educators
                    is the changing nature of student learning constructs over
                    time.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="d-flex justify-content-center align-items-center ">
              <div class="m-3">
                <img src={starIcon} width="40px" />
              </div>
              <div
                class="d-flex m-3"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div>
                  <Typography
                    sx={{
                      fontSize: "28pt",
                      color: "#62180f",
                      fontWeight: "bold",
                      fontFamily: "Calibri",
                    }}
                  >
                    Question #4?
                  </Typography>
                </div>

                <div>
                  <Typography sx={{ fontSize: "14pt" }}>
                    Answer: One particular challenge for schools and educators
                    is the changing nature of student learning constructs over
                    time.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="container mt-5   ">
        <div class="row ">
          <div class="col-sm-6  ">
            <SmBtnOne label="Register Now" />
          </div>
          <div class="col-sm-6 ">
            <SmBtnOne label="Contact Sales" />
          </div>
        </div>
      </div>

      {/* footer */}
      <FooterApp />
      {/* footer */}
    </>
  );
}

export default ScreenOne;
