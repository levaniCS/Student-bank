import { useRouter } from "next/router"
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {
  AuthDataProps,
  RegisterDataProps,
  Goals
} from "../../utils/form.interfaces";

const GoalsList = ({ students }: AuthDataProps) => {
  const router = useRouter()

  const studentsWithGoals = students.list.filter((st: RegisterDataProps) => {
    if(st.goals && st.goals.length > 0) {
      return st
    }
  })


  const handleEditGoal = (st: RegisterDataProps, goalId: String | undefined) => {
    let pushObj = {
      pathname: "/dashboard/goals",
      query: {},
    };

    if (st.id) {
      pushObj.query = {
        studentId: st.id,
        goalId,
      };
    }

    router.push(pushObj);
  }


  const handleDeleteGoal = (studentId: String | undefined, goalId: String | undefined) => {
    if(studentId && goalId) {
      students.deleteGoalToStudent(studentId, goalId)
    }
  }


  const handleMarkAsDone = (studentId: String | undefined, goalId: String | undefined) => {
    if(studentId && goalId) {
      students.markGoalAsDoneToStudent(studentId, goalId)
    }
  }
  
  const renderGoalsList = () =>
    studentsWithGoals.map((st: RegisterDataProps) => {
      const renderGoals = st.goals ? st.goals.map((g: Goals) => (
        <GoalItem key={String(g.description)} isDone={g.isDone}>
          <p>{`${st.name} ${st.surname}`}</p>
          <p>{g.title}</p>
          <p style={{ maxWidth: 200 }}>{g.description}</p>
          <DropdownButton
            as={ButtonGroup}
            key={'Success'}
            id={`dropdown-variants-success`}
            variant={'success'}
            title={'ექშენები'}
          >
            <Dropdown.Item eventKey="1" onClick={() => handleDeleteGoal(st.id, g.id)}>წაშლა</Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => handleEditGoal(st, g.id)}>ედითი</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => handleMarkAsDone(st.id, g.id)}>შესრულებულად მონიშვნა</Dropdown.Item>
          </DropdownButton>
        </GoalItem>
      )) : null

      return renderGoals
    });



  if(studentsWithGoals.length <= 0) {
    return null;
  }

  return (
    <StudentList>
      <>
        <HeaderWrapper>
          <StyledTitle>მიზნები</StyledTitle>
          <StyledHeader>
            <p>სტუდენტი</p>
            <p>სათაური</p>
            <p>აღწერა</p>
            <p>ექშენები</p>
          </StyledHeader>
        </HeaderWrapper>
        {renderGoalsList()}
      </>
    </StudentList>
  );
};

export default GoalsList;

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
const GoalItem = styled("li")<{ isDone?: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.1) 2px 10px 20px 2px;
  margin: 10px 0;
  background-color: ${p => p.isDone ? '#03C04A' : 'transparent'};

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  p {
    font-size: 15px;
    color: ${p => p.isDone ? '#000' : '#547cb1'};
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