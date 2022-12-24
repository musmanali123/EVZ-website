import { Label } from "@mui/icons-material";
import React from "react";


function SmBtnOne(props) {

  const {
    label,
    onClick,
    width,
    } = props;
    


    return (
        <>
           <button
              type="button"
          class="btn btn-secondary btn-lg m-3 shadow"
          onClick={onClick}
         
              style={{
                backgroundImage:
                  "linear-gradient(to right,#111640 10%,#621101 40%)",
                borderRadius: "20px",
                border: "none",
                fontSize: "16pt",
                fontFamily:"calibri",
                fontWeight: "bold",
                padding: "1rem",
                width:"150px", 
                
              }}
            >
                {label}
            </button>
        
        
        </>
    )
};


export default SmBtnOne;