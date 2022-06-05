import React, { useMemo, useState } from "react";
import styled from "styled-components";
import device from "../../responsive/device";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createJob } from "../../store/actions/jobActions";
import { v4 as uuidv4 } from "uuid";
import CustomTextField from "../../components/CustomTextField/CustomTextField";

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
  const dispatch = useDispatch();
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

  const createButtonClickHandler = () => {
    if (jobName === "" || selectedPriority.value === 0) {
      toast.error("Job Name and Priority fields are required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const job = {
        id: uuidv4(),
        name: jobName,
        priority: selectedPriority,
      };

      dispatch(createJob(job));
      setSelectedPriotiy({ name: "Choose", value: 0 });
      setJobName("");
      toast.success("Job is created!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <h2>Create New Job</h2>
      <FormContainer>
        <CustomTextField
          label={"Job Name"}
          containerStyle={{ flexGrow: 2 }}
          value={jobName}
          onChange={NameChangeHandler}
        />
        <CustomSelect
          label={"Job Priority"}
          priorities={priorities}
          selectedPriority={selectedPriority}
          setSelectedPriotiy={setSelectedPriotiy}
          containerStyle={{ flexGrow: 1 }}
        />
        <div>
          <CreateButton onClick={createButtonClickHandler}>
            <img src="/assets/add.png" alt="add_icon" /> Create
          </CreateButton>
        </div>
      </FormContainer>
    </>
  );
}

export default CreateNewJob;
