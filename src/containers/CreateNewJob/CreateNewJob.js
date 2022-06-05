import React, { useMemo, useState } from "react";
import styled from "styled-components";
import device from "../../responsive/device";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

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
  justify-content: space-between;
  @media ${device.mobileL} {
    & label {
      font-size: 10px;
    }
  }
`;

const CreateButton = styled.button`
  background-color: ${(props) => props.theme.trivalColor};
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

  return (
    <>
      <h2>Create New Job</h2>
      <FormContainer>
        <div style={{ flexGrow: 2 }}>
          <label>Job Name</label>
          <JobNameTextField value={jobName} onChange={NameChangeHandler} />
        </div>
        <CustomSelect
          label={"Job Priority"}
          priorities={priorities}
          selectedPriority={selectedPriority}
          setSelectedPriotiy={setSelectedPriotiy}
          containerStyle={{ flexGrow: 1 }}
        />
        <div>
          <CreateButton>
            <img src="/assets/add.png" alt="add_icon" /> Create
          </CreateButton>
        </div>
      </FormContainer>
    </>
  );
}

export default CreateNewJob;
