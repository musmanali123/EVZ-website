import React from "react";
import TextField from "@mui/material/TextField";

function SmTextArea() {
  return (
    <>
      <div class="mb-3">
        <textarea
          class="form-control "
          id="exampleFormControlTextarea1"
          rows="3"
          style={{width:"100%"}}
        ></textarea>
      </div>
    </>
  );
}

export default SmTextArea;
