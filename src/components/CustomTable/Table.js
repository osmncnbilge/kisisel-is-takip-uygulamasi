import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import device from "../../responsive/device";
import CustomModal from "../CustomModal/CustomModal";

const CustomTable = styled.table`
  display: block;
  border-collapse: collapse;
  width: 100%;
  margin-top: 3px;
  border: 1px solid #d9eafa85;
  border-radius: 5px;

  @media ${device.mobileL} {
    font-size: 10px;
  }
`;

const CustomThead = styled.thead`
  display: block;
  width: 100%;
  background-color: #d9eafa;
  text-align: left;
  & :first-child {
    width: 50%;
  }

  & :not(:first-child) {
    width: 25%;
  }
`;

const CustomTbody = styled.tbody`
  display: block;
  width: 100%;
  text-align: left;
`;

const CustomTr = styled.tr`
  display: flex;
  column-gap: 10px;
  padding: 10px;
  width: 100% !important;
  align-items: center;
  &:nth-child(even) {
    background-color: #dddddd3b;
  }
  & > td:first-child {
    flex-basis: 50%;
  }

  & > td:not(:first-child) {
    flex-basis: 25%;
  }
`;

const CustomTd = styled.td`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > img {
    height: 15px;
    width: 15px;
  }
  ${(props) =>
    props.isIconColumn &&
    css`
      display: flex;
      column-gap: 10px;
    `}
`;

const PriorityText = styled.p`
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) =>
    props.value === 1
      ? props.theme.urgentColor
      : props.value === 2
      ? props.theme.regularColor
      : props.value === 3
      ? props.theme.trivalColor
      : "none"};
  color: #fff;
  text-align: center;

  @media ${device.mobileL} {
    padding: 3px;
  }
`;

const IconButton = styled.button`
  border: none;
  background-color: #dddddd8a;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  & > img {
    height: 25px;
    width: 27px;
  }

  @media ${device.mobileL} {
    padding: 5px;
    & > img {
      height: 10px;
      width: 10px;
    }
  }
`;

function Table({ jobList }) {
  const [selectedEditJob, setSelectedEditJob] = useState(null);
  const [selectedDeleteJob, setSelectedDeleteJob] = useState(null);

  return (
    <>
      <CustomTable>
        <CustomThead>
          <CustomTr>
            <th>Name</th>
            <th>Priority</th>
            <th>Action</th>
          </CustomTr>
        </CustomThead>
        <CustomTbody>
          {jobList?.map((job) => (
            <CustomTr key={job.id}>
              <CustomTd>{job.name}</CustomTd>
              <CustomTd>
                <PriorityText value={job?.priority?.value}>
                  {job?.priority?.name}
                </PriorityText>
              </CustomTd>
              <CustomTd isIconColumn={true}>
                <IconButton onClick={() => setSelectedEditJob(job)}>
                  <img src="/assets/edit.png" alt="edit_icon" />
                </IconButton>
                <IconButton onClick={() => setSelectedDeleteJob(job)}>
                  <img src="/assets/delete.png" alt="delet_icon" />
                </IconButton>
              </CustomTd>
            </CustomTr>
          ))}
        </CustomTbody>
      </CustomTable>
      {selectedEditJob && (
        <CustomModal
          selectedJob={selectedEditJob}
          clearSelectedJob={setSelectedEditJob}
        />
      )}

      {selectedDeleteJob && (
        <CustomModal
          isDelete={true}
          selectedJob={selectedDeleteJob}
          clearSelectedJob={setSelectedDeleteJob}
        />
      )}
    </>
  );
}

export default Table;
