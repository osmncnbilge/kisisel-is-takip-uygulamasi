import React, { useState } from "react";
import styled from "styled-components";
import { ClickAwayListener } from "@mui/material";
import device from "../../responsive/device";

const PrioritySelect = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 10px 0px 10px 20px;
  color: #5b5858;
  border: 1px solid #ccc;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }

  @media ${device.mobileL} {
    padding: 10px 0 10px 5px;
    font-size: 10px;
  }
`;

const CustomOptionContainer = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  margin-top: 3px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #fff;

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 3px;
    margin-bottom: 3px;
  }
`;

const CustomOption = styled.div`
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) =>
    props.value === 1
      ? props.theme.urgentColor
      : props.value === 2
      ? props.theme.regularColor
      : props.value === 3
      ? props.theme.trivalColor
      : "#ddd"};
  color: #fff;
  margin-bottom: 3px;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 3px;
    margin-bottom: 3px;
  }
`;

function CustomSelect({
  label,
  priorities,
  selectedPriority,
  setSelectedPriotiy,
  containerStyle,
}) {
  const [isOpenSelectPriority, setIsOpenSelectPriority] = useState(false);
  const toggleSelect = () => {
    setIsOpenSelectPriority(!isOpenSelectPriority);
  };

  const selectPriorityHandler = (event) => {
    const value = +event.target.getAttribute("value");
    const selectedPriority = priorities.find(
      (priority) => priority.value === value
    );
    setSelectedPriotiy(selectedPriority);
    setIsOpenSelectPriority(false);
  };

  return (
    <div style={{ position: "relative", ...containerStyle }}>
      {label && <label>{label}</label>}
      <PrioritySelect onClick={toggleSelect}>
        {selectedPriority?.name}
      </PrioritySelect>
      {isOpenSelectPriority && (
        <ClickAwayListener onClickAway={() => toggleSelect(false)}>
          <CustomOptionContainer>
            {priorities.map(({ name, value }) => (
              <CustomOption
                key={value}
                value={value}
                onClick={selectPriorityHandler}
              >
                {name}
              </CustomOption>
            ))}
          </CustomOptionContainer>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default CustomSelect;
