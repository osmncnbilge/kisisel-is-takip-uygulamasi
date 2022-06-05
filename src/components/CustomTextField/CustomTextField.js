import React from "react";
import styled from "styled-components";
import device from "../../responsive/device";

const JobNameTextField = styled.input.attrs({
  type: "text",
})`
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: 0;
  padding: 12px 20px;
  display: inline-block;
  width: 100%;
  color: #5b5858;

  @media ${device.mobileL} {
    padding: 10px;
    font-size: 10px;
  }
`;

function CustomTextField({ containerStyle, label, value, onChange, ...props }) {
  return (
    <>
      <div style={{ ...containerStyle }}>
        {label && <label>{label}</label>}
        <JobNameTextField value={value} onChange={onChange} {...props} />
      </div>
    </>
  );
}

export default CustomTextField;
