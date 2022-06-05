import React, { useMemo, useState } from "react";
import styled from "styled-components";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CustomTable from "../../components/CustomTable/Table";
import device from "../../responsive/device";
import { v4 as uuidv4 } from "uuid";

const FilterFormContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #d9eafa85;
  column-gap: 10px;
  @media ${device.mobileL} {
    padding: 10px;
    font-size: 10px;
  }
`;

const SearchTextFieldContainer = styled.label`
  display: block;
  flex-basis: 80%;
  position: relative;
  & > img {
    height: auto;
    width: 19px;
    position: absolute;
    left: 9px;
    top: 10px;
  }

  @media ${device.mobileL} {
    & > img {
      width: 13px;
    }
  }
`;

const SearchTextField = styled.input.attrs({
  type: "text",
})`
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: 0;
  padding: 12px 10px 12px 40px;
  display: inline-block;
  width: 100%;
  color: #5b5858;

  @media ${device.mobileL} {
    padding: 10px 10px 10px 26px;
    font-size: 10px;
  }
`;

function JobList() {
  const [selectedPriority, setSelectedPriotiy] = useState({
    name: "Priority(all)",
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

  const jobList = useMemo(
    () => [
      {
        id: uuidv4(),
        name: "Osman Can BİLGE",
        priority: {
          name: "Urgent",
          value: 1,
        },
      },
      {
        id: uuidv4(),
        name: "Oğuzhan BİLGE",
        priority: {
          name: "Regular",
          value: 2,
        },
      },
    ],
    []
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Job List</h2>
        <p style={{ marginLeft: "auto", alignSelf: "flex-end" }}>(3/3)</p>
      </div>
      <FilterFormContainer>
        <SearchTextFieldContainer>
          <SearchTextField placeholder="Job Name" />
          <img src="/assets/search.png" alt="search" />
        </SearchTextFieldContainer>
        <CustomSelect
          priorities={priorities}
          selectedPriority={selectedPriority}
          setSelectedPriotiy={setSelectedPriotiy}
          containerStyle={{ flexBasis: "20%" }}
        />
      </FilterFormContainer>
      <CustomTable jobList={jobList} />
    </div>
  );
}

export default JobList;
