import { LogoDev } from "@mui/icons-material";
import React from "react";
import logo from "../Assets/images/logo.png";
import email from "../Assets/images/emailIcon.png";
import linkDin from "../Assets/images/linkdinIcon.png";

function NavbarComp() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark m-0 p-0 sticky-top  "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 3% , #111640 26%,#621101 40%)",
        }}
      >
        <div class="container-fluid    ">
          <div
            class="col-md-6 col-sm-12  d-flex justify-content-center align-items-center "
            style={{
              width: "25%",
              transform: "skew(-30deg)",
              backgroundColor: "white",
            }}
          >
            <a
              class="navbar-brand d-flex justify-content-center align-items-center navElemDef"
              href="#"
            >
              <img
                src={logo}
                width="50%"
                style={{ transform: "skew(30deg)", margin: "0" }}
              />
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class=" collapse   navbar-collapse   align-items-center  "
            id="navbarSupportedContent"
            style={{
              backgroundColor:
                "linear-gradient(to right,#343860 25%,#8b373d 40%)",
            }}
          >
            <div class=" w-100 d-flex  justify-content-end align-items-end  "  >
              <div>
                <ul  class=" navbar-nav  me-auto mb-2 mb-lg-0 d-flex justif-content-center    align-items-center " >
                  <li class="nav-item  ">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{
                        fontSize: "14pt",
                        marginLeft: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Overview
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      style={{
                        fontSize: "14pt",
                        marginLeft: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Insights
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      style={{
                        fontSize: "14pt",
                        marginLeft: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      style={{
                        fontSize: "14pt",
                        marginLeft: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Registration
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      style={{
                        fontSize: "14pt",
                        marginLeft: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Request Demo
                    </a>
                  </li>

                  <li class="nav-item ">
                    <img
                      src={email}
                      width="50px"
                      style={{ marginLeft: "25px", cursor: "pointer" }}
                    />
                  </li>

                  <li class="nav-item m-2">
                    <img
                      src={linkDin}
                      width="50px"
                      style={{ marginLeft: "25px", cursor: "pointer" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
