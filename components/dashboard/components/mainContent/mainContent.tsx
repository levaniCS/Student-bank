import { AuthAndNavProps } from "../../../../utils/form.interfaces"
import MainTab from "./mainTab"
import StudentTab from "./studentTab"

const MainContent = (props: AuthAndNavProps) => {
  const { activeNav } = props
  return (
    <>
      {activeNav === 'main' && <MainTab {...props} />}
      {activeNav === 'student' && <StudentTab {...props} />}
    </>
  )
}

export default MainContent