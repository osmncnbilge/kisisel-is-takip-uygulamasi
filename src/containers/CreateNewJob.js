import React, { useState } from "react";
import { Container } from "@mui/system";
import styled from "styled-components";
import { ClickAwayListener } from "@mui/material";
import { useMemo } from "react";
import device from "../responsive/device";

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

const FormContainer = styled.div`
  margin-top: 20px;
  color: #5b5858;
  display: flex;
  column-gap: 10px;
  @media ${device.mobileL} {
    & label {
      font-size: 10px;
    }
  }
`;

const PrioritySelect = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 10px 0px 10px 20px;
  color: #5b5858;
  border: 1px solid #ccc;
  &:hover {
    cursor: pointer;
  }

  @media ${device.mobileL} {
    padding: 10px 0 10px 10px;
    font-size: 10px;
  }
`;

const CustomOptionContainer = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  margin-top: 3px;
  border-radius: 5px;

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 3px;
    margin-bottom: 3px;
  }
`;

const CustomOption = styled.div`
  border-radius: 5px;
  color: red;
  padding: 5px;
  background-color: ${(props) =>
    props.value === 1
      ? "#f23577"
      : props.value === 2
      ? "#f29d35"
      : props.value === 3
      ? "#2e85ff"
      : "none"};
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

const CreateButton = styled.button`
  background-color: #2e85ff;
  border: none;
  color: #fff;
  margin-top: 18px;
  padding: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  & > img {
    height: 12px;
    width: 17px;
  }

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 11px;
  }
`;

function CreateNewJob() {
  const [jobName, setJobName] = useState("");
  const [selectedPriority, setSelectedPriotiy] = useState({
    name: "Choose",
    value: 0,
  });
  const [isOpenSelectPriority, setIsOpenSelectPriority] = useState(false);

  const priorities = useMemo(
    () => [
      {
        name: "Urgent",
        value: 1,
      },
      {
        name: "Regular",
        value: 2,
      },
      {
        name: "Trival",
        value: 3,
      },
    ],
    []
  );

  const NameChangeHandler = (event) => {
    setJobName(event.target.value);
  };

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
    <Container sx={{ padding: "50px 10px" }}>
      <h2>Create New Job</h2>
      <FormContainer>
        <div style={{ width: "50%" }}>
          <label>Job Name</label>
          <JobNameTextField value={jobName} onChange={NameChangeHandler} />
        </div>
        <div style={{ width: "30%" }}>
          <label>Job Priority</label>
          <PrioritySelect onClick={toggleSelect}>
            {selectedPriority.name}
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
        <div style={{ width: "20%" }}>
          <CreateButton>
            <img src="/assets/add.png" alt="add_icon" /> Create
          </CreateButton>
        </div>
      </FormContainer>
    </Container>
  );
}

export default CreateNewJob;
