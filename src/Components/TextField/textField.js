import React from "react";
import TextField from "@mui/material/TextField";

function SmTextField(props) {
  const { label, type, required } = props;
  return (
    <>
      <div
        class="col-sm-10"
        style={{
          width: "100%",
          
          
        
          padding: "5px",
        }}
      >
        <input
          style={{
            width: "100%",
            borderRadius: "20px",
            fontSize: "1.1rem",
            backgroundColor: "white",
            padding: "10px",
            
          }}
          type={type}
          required={required}
          class="form-control-plaintext"
        />
      </div>
    </>
  );
}

export default SmTextField;
