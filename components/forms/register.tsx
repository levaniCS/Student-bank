import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledErrorMessage,
} from "./formStyles";
import { useForm, validateInput } from "../../utils/useForm";
import { AuthDataProps, RegisterDataProps } from "../../utils/form.interfaces";

const Register = (
  props: AuthDataProps & {
    isStudentAdd?: boolean;
    onCancel?: () => void;
    style?: any;
  }
) => {
  const router = useRouter();
  const initialState: Partial<RegisterDataProps> = {
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };
  const [values, setValues] = useForm(initialState);
  const [errors, setErrors] = useState<Partial<RegisterDataProps>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrors({});
    e.preventDefault();
    const errors = validateInput(values);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (props.isStudentAdd) {
      props.students.addStudent(values, props.user.userDetails.id);
    } else {
      props.status.register(values);
    }
    router.push("/dashboard/main");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {!props.isStudentAdd && <h1>რეგისტრაცია</h1>}
      <StyledInput
        placeholder="სახელი"
        type={"text"}
        name="name"
        value={values.name}
        onChange={setValues}
      />
      {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      <StyledInput
        placeholder="გვარი"
        type={"text"}
        name="surname"
        value={values.surname}
        onChange={setValues}
      />
      {errors.surname && (
        <StyledErrorMessage>{errors.surname}</StyledErrorMessage>
      )}
      <StyledInput
        placeholder="იმეილი"
        type={"text"}
        name="email"
        value={values.email}
        onChange={setValues}
      />
      {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
      <StyledInput
        placeholder="პაროლი"
        type={"password"}
        name="password"
        value={values.password}
        onChange={setValues}
      />
      {errors.password && (
        <StyledErrorMessage>{errors.password}</StyledErrorMessage>
      )}
      <StyledInput
        placeholder="გაიმეორეთ პაროლი"
        type={"password"}
        name="passwordRepeat"
        value={values.passwordRepeat}
        onChange={setValues}
      />
      {errors.passwordRepeat && (
        <StyledErrorMessage>{errors.passwordRepeat}</StyledErrorMessage>
      )}
      {props.isStudentAdd ? (
        <div>
          <StyledButton type="submit">რეგისტრაცია</StyledButton>
          <StyledButton
            style={{ background: "rgb(40, 97, 161)" }}
            onClick={props.onCancel}
          >
            გაუქმება
          </StyledButton>
        </div>
      ) : (
        <StyledButton type="submit">რეგისტრაცია</StyledButton>
      )}
    </StyledForm>
  );
};

export default Register;
