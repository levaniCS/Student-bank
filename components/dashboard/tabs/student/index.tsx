import { useState } from "react";
import styled from "styled-components";
import { AuthDataProps } from "../../../../utils/form.interfaces";
import Register from "../../../forms/register";

interface Student {
  status?: any;
  user?: any;
  students?: any;
}

const Student = (props: AuthDataProps) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <StudentWrapper>
      <StyledAddStudentContainer onClick={() => setShowForm(!showForm)}>
        მოსწავლის დამატება
      </StyledAddStudentContainer>
      {showForm && (
        <Register
          {...props}
          isStudentAdd
          onCancel={() => setShowForm(!showForm)}
        />
      )}
    </StudentWrapper>
  );
};

export default Student;

const StudentWrapper = styled("div")`
  width: 100%;
  margin: 20px 50px;
`

const StyledAddStudentContainer = styled("div")`
  /* height: 100px; */
  width: fit-content;
  color: gray;
  font-weight: bold;
  background: rgb(229, 241, 255);
  padding: 20px;
  margin: 20px 0;
  border-radius: 2rem;
  cursor: pointer;
`;
