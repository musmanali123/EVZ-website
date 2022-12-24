import { Typography } from "@mui/material";
import React from "react";
import SmTextArea from "../TextField/textArea";
import SmTextField from "../TextField/textField";
import ReCAPTCHA from "react-google-recaptcha";
import SmBtnOne from "../buttons/SmBtnOne";
import { useState } from "react";

function FormControlComp() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const SubmitData = () => {
    alert("Data Submit Functionality tested  Successfully !");
  };
  return (
    <>
      <div className="container-fluid d-flex justify-content-center p-3 " >
        <div
          class="container col-lg-6 "
          style={{  }}
        >
          <div class="container p-2 d-flex justify-content-center align-items-center" style={{flexDirection:"column",backgroundColor: "#f0f0f0", borderRadius: "20px"
        }}>
            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography  style={{ fontWeight: "bold",fontSize:"16pt",fontFamily:"calibri" }}>
                  Your Name (required)
                </Typography>
              </div>
              <div>
                <SmTextField type="text" required="true" />
              </div>
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography  style={{ fontWeight: "bold",fontSize:"16pt",fontFamily:"calibri" }}>
                  Your Email (required)
                </Typography>
              </div>
              <div>
                <SmTextField type="email" required="true" />
              </div>
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography  style={{ fontWeight: "bold",fontSize:"16pt",fontFamily:"calibri" }}>
                  Your Company (required)
                </Typography>
              </div>
              <div>
                <SmTextField type="text" required="true" />
              </div>
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography  style={{ fontWeight: "bold",fontSize:"16pt",fontFamily:"calibri" }}>
                  Your Contact Number (required)
                </Typography>
              </div>
              <div>
                <SmTextField type="text" required="true" />
              </div>
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography  style={{ fontWeight: "bold",fontSize:"16pt",fontFamily:"calibri" }}>
                  Message (required)
                </Typography>
              </div>
              <div >
                <SmTextArea />
              </div>
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <ReCAPTCHA
                sitekey="6Ldu23sjAAAAAMt8PyizdIylgULcxt1RqPeMsVkV"
                onChange={onChange}
              />
              {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
            </div>

            <div
              class="col-md-12 col-lg-6 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <SmBtnOne label="Submit" onClick={SubmitData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormControlComp;
