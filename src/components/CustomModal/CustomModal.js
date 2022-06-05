import React, { useEffect, useMemo, useState } from "react";
import { Modal, Stack } from "@mui/material";
import { Container } from "@mui/system";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomSelect from "../CustomSelect/CustomSelect";
import styled from "styled-components";
import device from "../../responsive/device";
import { useDispatch } from "react-redux";
import { deleteJob, updateJob } from "../../store/actions/jobActions";

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1;
  padding: 50px 30px;
  border-radius: 10px;
  width: 500px;

  @media ${device.tablet} {
    width: 250px;
  }
`;

const CustomButton = styled.button`
  background-color: ${(props) =>
    props.isCancel ? "#ddd" : props.theme.urgentColor};
  border: none;
  color: #fff;
  padding: 14px;
  border-radius: 5px;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 11px;
  }
`;

function CustomModal({ selectedJob, isDelete, clearSelectedJob }) {
  const dispatch = useDispatch();
  const [selectedPriority, setSelectedPriotiy] = useState(selectedJob.priority);

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

  const modalClickHandler = () => {
    if (isDelete) {
      dispatch(deleteJob(selectedJob.id));
    } else {
      dispatch(updateJob({ ...selectedJob, priority: selectedPriority }));
    }
    clearSelectedJob(null);
  };

  return (
    <>
      <Modal
        open={selectedJob ? true : false}
        onClose={() => clearSelectedJob(null)}
      >
        <ModalContainer>
          <Container>
            <Stack direction="column" spacing={2}>
              {isDelete ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="/assets/warning.png" alt="warning" />
                </div>
              ) : (
                <h2 style={{ textAlign: "center" }}>Job Edit</h2>
              )}
              {isDelete ? (
                <>
                  <h3 style={{ textAlign: "center" }}>
                    Are you sure want to delete it?
                  </h3>
                </>
              ) : (
                <>
                  <CustomTextField
                    label={"Job Name"}
                    value={selectedJob?.name}
                    disabled={true}
                  />
                  <CustomSelect
                    label={"Job Priority"}
                    priorities={priorities}
                    selectedPriority={selectedPriority}
                    setSelectedPriotiy={setSelectedPriotiy}
                  />
                </>
              )}
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <CustomButton
                  isCancel={true}
                  onClick={() => clearSelectedJob(null)}
                >
                  Cancel
                </CustomButton>
                <CustomButton onClick={modalClickHandler}>
                  {isDelete ? "Approve" : "Save"}
                </CustomButton>
              </div>
            </Stack>
          </Container>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default CustomModal;
