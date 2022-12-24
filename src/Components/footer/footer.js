import React from "react";
import emailIcon from "../Assets/images/emailIcon.png";
import linkDinIcon from "../Assets/images/linkdinIcon.png";
import { Typography } from "@mui/material";

function FooterApp() {
  return (
    <>
      {/* footer */}
      <div class="container-fluid" style={{ backgroundColor: "#111640" }}>
        <div class="container" style={{ backgroundColor: "#111640" }}>
          <div class="row">
            <div class="col-md-2 col-lg-2"></div>
            <div class="container  mt-2 col-md-8 col-lg-8 d-flex justify-content-center align-items-center">
               <div class="">
              <Typography
                sx={{
                  fontSize: "22pt",
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                The Rick Butler Education EST Dubai
              </Typography>
              <Typography
                sx={{
                  fontSize: "22pt",
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                United Arab Emirates
              </Typography>
              <Typography
                sx={{
                  fontSize: "22pt",
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                evalznow@trbei.com
                </Typography>
                
                  <Typography
                  sx={{
                  marginTop:"15px",
                  fontSize: "18pt",
                  fontFamily: "calibri",
                
                  textAlign: "center",
                  color: "white",
                }}
              >
                COPYRIGHT Ⓒ 2023 EVALZNOW | ALL RIGHT RESERVED
              </Typography>
            </div>
           </div>
            <div
              class="col-md-2 col-sm-12 col-lg-2  d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div class="m-3 ">
                <a href="#">
                  <img src={emailIcon} width="70px" />
                </a>
              </div>

              <div class="m-3">
                <a href="#">
                  <img src={linkDinIcon} width="70px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </>
  );
}

export default FooterApp;
