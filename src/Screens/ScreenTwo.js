import React from "react";
import NavbarComp from "../Components/navbar/navbarComp";
import { Box, Typography } from "@mui/material";
import SmBtnOne from "../Components/buttons/SmBtnOne";
import SmTextField from "../Components/TextField/textField";
import headingBar from "../Components/Assets/images/headingBar.png";
import bannerTwo from "../Components/Assets/images/bannerTwo.png";
import TextArea from "../Components/TextField/textArea";

import FooterApp from "../Components/footer/footer";
import TableApp from "../Components/table/table";
import "../App.css";
import { FormControl } from "react-bootstrap";
import FormControlComp from "../Components/formControl/formControl";
import ArrowIcon from "../Components/Assets/images/arrowIconWhite.png";


function ScreenTwo() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

 

  return (
    <>
      <NavbarComp />

      <div
        class="container mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
        sx={{
            fontWeight: "bolder",
            color: "#111640",
            textAlign: "center",
            fontSize: "28pt",
            fontFamily: "Calibri",
          }}
        >
          SCHEDULE A DEMO SESSION & REGISTER TODAY
        </Typography>
      </div>

      <div
        class="col-md-12 col-sm-12 mt-4"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={headingBar} width="40%" />
      </div>

      <div class="container mt-5 ">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "18pt",
            color: "black",
            fontFamily: "calibri",
            fontWeight: "bold",
          }}
        >
          Our assessment power is limitless and we offer what others simply
          cannot deliver. Not to mention, we cater to more sectors than anyone
          on the global market including - but not limited to:
        </Typography>
      </div>

          <div class="mt-5">
      <TableApp/>

          </div>


      <div class="container  d-flex justify-content-center align-items-center col-md-12 mt-5">
        <div class="row  d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center w-100">
            <SmBtnOne label="Register Now" />
            <SmBtnOne label="Learn More" />
          </div>
        </div>
      </div>

      <div className="bgTwoBanner"  >
        <div class="container-fluid " className="bannerTwo">
          <div class="row">

            <div class=" col-lg-7   ">

            </div>


              <div class=" col-lg-5  d-flex justify-content-end" style={{height:"215vh",flexDirection:"column"}}>
              <div class="d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Training(Virtual/Onsite)
                  </Typography>
                </div>
              </div>
              
                <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                24/7 Technical Support
                  </Typography>
                </div>
                </div>

                    <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Competency Support
                  </Typography>
                </div>
                </div>
              
  <div class="d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
              Rubric Generation
                  </Typography>
                </div>
              </div>
              
                <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Dedicated Management
                  </Typography>
                </div>
              </div>
              
                <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Oversight Assisstance
                  </Typography>
                </div>
              </div>
              
                <div class="d-flex align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Data Auditing
                  </Typography>
                </div>
              </div>
              
                <div class="d-flex  align-items-center">
                <div class="m-2">
                  <img src={ArrowIcon} width="50px" />
                </div>
                <div class="m-2">
                  <Typography sx={{
                    fontFamily:"calibri",
                    fontSize: "28pt",
                    fontWeight: "bold",
                    color:"white",
                  }}>
                Indexing & Ranking
                  </Typography>
                </div>
                </div>

            </div>

          </div>

         </div>
        
      </div>

      <div class="container mt-5 ">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#62180f",
            textAlign: "center",
          }}
        >
          Reach Out to Us Anytime
        </Typography>
      </div>

      
      <FormControlComp/>

      <div class="container mt-5  d-flex justify-content-center align-items-center col-md-12 ">
        <div class="row  d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center w-100">
            <SmBtnOne label="Register Now" />
            <SmBtnOne label="Learn More" />
          </div>
        </div>
      </div>

      {/* footer */}
      <FooterApp />
    </>
  );
}

export default ScreenTwo;
