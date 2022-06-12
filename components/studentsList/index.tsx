import Link from "next/link";
import { useRouter } from "next/router"
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {
  AuthDataProps,
  RegisterDataProps,
} from "../../utils/form.interfaces";
import { StyledButton } from "../forms/formStyles";

const StudentsList = ({ students }: AuthDataProps) => {
  const router = useRouter()

  const list = students.list;


  const handleAddGoal = (studentId: String | undefined) => {
    let pushObj = {
      pathname: '/dashboard/goals',
      query: {}
    }

    if(studentId) {
      pushObj.query = { studentId: studentId }
    }
  
    router.push(pushObj)
  }
  
  const renderStudentList = () =>
    list.map((i: RegisterDataProps, idx: number) => {
      return (
        <StudentItem key={idx}>
          <p>{i.name}</p>
          <p>{i.surname}</p>
          <p>{i.email}</p>
          <DropdownButton
            as={ButtonGroup}
            key={'Success'}
            id={`dropdown-variants-success`}
            variant={'success'}
            title={'ექშენები'}
          >
            <Dropdown.Item eventKey="1">ბალანსის შევსება</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>თანხის მოთხოვნა</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => handleAddGoal(i.id)}>მიზნის დამატება</Dropdown.Item>
          </DropdownButton>
        </StudentItem>
      );
    });

  return (
    <StudentList>
      {list.length > 0 ? (
        <>
          <HeaderWrapper>
            <StyledTitle>მოსწავლეები</StyledTitle>
            <StyledHeader>
              <p>სახელი</p>
              <p>გვარი</p>
              <p>ელ ფოსტა</p>
              <p>ექშენები</p>
            </StyledHeader>
          </HeaderWrapper>
          {renderStudentList()}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <BalanceTitle style={{ fontSize: 15, marginBottom: "1rem" }}>
            თქვენ არ დაგიმატებიათ მოსწავლის ანგარიში
          </BalanceTitle>
          <Link href={`/dashboard/student`}>
            <StyledButton
              style={{ width: "50%", fontSize: "15px", margin: 0 }}
            >
              დამატება
            </StyledButton>
          </Link>
        </div>
      )}
    </StudentList>
  );
};

export default StudentsList;

const BalanceTitle = styled("h1")`
  font-size: 14px;
  text-align: center;
  color: #798ba3;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const HeaderWrapper = styled("div")`
  display: block;
  margin-bottom: 20px;

`

const StudentList = styled("ul")`
  list-style: none;
  width: 100%;
  margin: 0;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 18px 50px -10px;
  
`;
const StudentItem = styled("li")`
  box-shadow: rgba(0, 0, 0, 0.1) 2px 10px 20px 2px;
  margin: 10px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 15px;
    color: #547cb1;
    margin-left: 60px;
  }
`;


const StyledHeader = styled("div")`
  border-radius: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: #212529;
  }
`;

const StyledTitle = styled("h2")`
  color: rgb(168, 177, 191);
  font-size: 16px;
`;