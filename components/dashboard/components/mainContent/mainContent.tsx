import { AuthAndNavProps } from "../../../../utils/form.interfaces"
import GoalsTab from "./goalsTab"
import MainTab from "./mainTab"
import StudentTab from "./studentTab"

const MainContent = (props: AuthAndNavProps) => {
  const { activeNav } = props
  return (
    <>
      {activeNav === 'main' && <MainTab {...props} />}
      {activeNav === 'student' && <StudentTab {...props} />}
      {activeNav === 'goals' && <GoalsTab {...props} />}
    </>
  )
}

export default MainContent