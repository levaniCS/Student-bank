import React, { useState } from 'react'
import styled from 'styled-components'
import { AuthAndNavProps } from '../../../../../utils/form.interfaces'
import Register from '../../../../forms/register'

const StudentTab = (props: AuthAndNavProps ) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <StyledAddStudentContainer onClick={() => setShowForm(!showForm)}>მოსწავლის დამატება</StyledAddStudentContainer>
      {showForm && (
        <Register
          {...props}
          isStudentAdd
          onCancel={() => setShowForm(!showForm)}
        />
      )}
    </div>
  )
}

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
`

export default StudentTab