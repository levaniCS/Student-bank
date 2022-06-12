/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components"
import { useRouter } from "next/router";

import {
  AuthDataProps,
  RegisterDataProps,
} from "../../../../utils/form.interfaces";

import { useForm } from "../../../../utils/useForm";
import GoalsList from "../../../goalsList";

const GoalsTab = (props: AuthDataProps) => {
  const router = useRouter()
  const [student, setStudent] = useState<RegisterDataProps | null>(null);
  const initialState: { title: String; description: String } = {
    title: "",
    description: "",
  };
  const [values, setValues, resetForm] = useForm(initialState);
  const {
    students: { list },
  } = props;

  useEffect(() => {
    if(router.query.studentId && typeof router.query.studentId === "string") {
      const curr = list.find((i) => i.id === router.query.studentId);
      if (curr) {
        setStudent(curr);
      }
    }
  }, [])
  


  function handleSelect(eventKey: string | null): void {
    const curr = list.find((i) => i.id === eventKey);
    if (curr) {
      setStudent(curr);
    }
  };

  const handleSubmit = () => {
    if (!values.title || !values.description || student === null) return;

    const studentId = student.hasOwnProperty("id") ? student.id : '123'
    props.students.addFieldToStudent(String(studentId), "goals", values);
    resetForm();
    router.push({ pathname: "/dashboard/main" });
  };

  return (
    <div style={{ width: '100%', margin: '30px 50px' }}>
      <GoalsList {...props} />
      {list.length > 0 ? (
        <>
          <DropdownButton
            title={
              student
                ? `${student?.name} ${student?.surname}`
                : "აირჩიეთ მოსწავლე მიზნის დასამატებლად"
            }
            id="dropdown-menu-align-right"
            onSelect={(eventKey: string | null, e: React.SyntheticEvent<unknown, Event>) => handleSelect(eventKey)}
          >
            {list.map((i) => (
              <Dropdown.Item eventKey={String(i.id!)}>
                {i.name} {i.surname}
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
          </DropdownButton>
          {student && (
            <Form style={{ width: 800, marginTop: 80 }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>მიზნის სათაური</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="სახელი..."
                  value={values.title}
                  onChange={setValues}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>მიზნის აღწერა</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={3}
                  value={values.description}
                  onChange={setValues}
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="success">
                დამატება
              </Button>
            </Form>
          )}
        </>
      ) : (
        <StyledMessage>იმისათვის რომ შეძლოთ მიზნის დამატება ჯერ უნდა დაამატოთ მოსწავლე!</StyledMessage>
      )}
    </div>
  );
};


const StyledMessage = styled("p")`
  font-size: 20px;
  color: #819cfd;
`

export default GoalsTab;
