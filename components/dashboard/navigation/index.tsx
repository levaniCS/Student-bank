import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface Navigation {
  status?: any;
  user?: any;
}

const Navigation = ({ status, user }: Navigation) => {
  const router = useRouter();
  const activeNav = router.query.tab;
  const isStudent = status.loggedIn && !user.userDetails.isParent;

  return (
    <NavigationComponent>
      <VerticalLine />
      <NavigationSection>
        <Logo src="/icons/logo-long.svg" alt="" />
        <Nav>
          <NavList>
            <Link href={`/dashboard/main`} key={`dashboard`}>
              <NavListItem
                style={{
                  background: activeNav === "main" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "main" && <CornerLine />}
                <Icon src="/icons/home.svg" alt="" />
                <NavTitle>მთავარი</NavTitle>
              </NavListItem>
            </Link>
            <Link href={`/dashboard/student`} key={`student`}>
              <NavListItem
                style={{
                  background: activeNav === "student" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "student" && (
                  <CornerLine style={{ top: "152px" }} />
                )}
                <Icon src="/icons/family.svg" alt="" />
                <NavTitle>მოსწავლე</NavTitle>
              </NavListItem>
            </Link>
            <Link href={`/dashboard/wallet`} key={`wallet`}>
              <NavListItem
                style={{
                  background: activeNav === "wallet" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "wallet" && (
                  <CornerLine style={{ top: "202px" }} />
                )}
                <Icon src="/icons/wallet.svg" alt="" />
                <NavTitle>საფულე</NavTitle>
              </NavListItem>
            </Link>
            <Link href={`/dashboard/invoice`} key={`invoice`}>
              <NavListItem
                style={{
                  background: activeNav === "invoice" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "invoice" && (
                  <CornerLine style={{ top: "253px" }} />
                )}
                <Icon src="/icons/invoice.svg" alt="" />
                <NavTitle>ინვოისი</NavTitle>
              </NavListItem>
            </Link>
            <>
              <Link href={`/dashboard/goals`} key={`goals`}>
                <NavListItem
                  style={{
                    background: activeNav === "goals" ? "#E5F1FF" : "#f6f8fb40",
                  }}
                >
                  {activeNav === "goals" && (
                    <CornerLine style={{ top: "300px" }} />
                  )}
                  <Icon src="/icons/text.svg" alt="" />
                  <NavTitle>მიზნები</NavTitle>
                </NavListItem>
              </Link>
              <Link href={`/dashboard/statistic`} key={`statistic`}>
                <NavListItem
                  style={{
                    background:
                      activeNav === "statistic" ? "#E5F1FF" : "#f6f8fb40",
                  }}
                >
                  {activeNav === "statistic" && (
                    <CornerLine style={{ top: "352px" }} />
                  )}
                  <Icon src="/icons/statistic.svg" alt="" />
                  <NavTitle>სტატისტიკა</NavTitle>
                </NavListItem>
              </Link>
            </>
          </NavList>

          <NavList>
            <Link href={`/dashboard/help`} key={`help`}>
              <NavListItem
                style={{
                  background: activeNav === "help" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "help" && (
                  <CornerLine1 style={{ bottom: "67px" }} />
                )}
                <Icon src="/icons/info.svg" alt="" />
                <NavTitle>დახმარება</NavTitle>
              </NavListItem>
            </Link>
            <Link href={`/dashboard/parameter`} key={`parameter`}>
              <NavListItem
                style={{
                  background:
                    activeNav === "parameter" ? "#E5F1FF" : "#f6f8fb40",
                }}
              >
                {activeNav === "parameter" && (
                  <CornerLine1 style={{ bottom: "15px" }} />
                )}
                <Icon src="/icons/setting.svg" alt="" />
                <NavTitle>პარამეტრები</NavTitle>
              </NavListItem>
            </Link>
          </NavList>
        </Nav>
      </NavigationSection>
    </NavigationComponent>
  );
};

export default Navigation;

const NavigationComponent = styled("div")`
  width: 13%;
  height: 100%;
  position: relative;
`;
const NavigationSection = styled("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;
const Nav = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NavList = styled("div")`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NavListItem = styled("div")`
  display: flex;
  gap: 8px;
  border-radius: 10px;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    background-color: #f6f8fb40;
  }
`;
const NavTitle = styled("h1")`
  font-size: 16px;
  font-weight: 600;
`;
const VerticalLine = styled("div")`
  width: 2px;
  height: 100%;
  background: #e8ecf5;
  position: absolute;
  top: 0;
  right: 0;
`;

const CornerLine = styled("div")`
  width: 4px;
  height: 50px;
  background: #0177fd;
  position: absolute;
  top: 106px;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CornerLine1 = styled("div")`
  width: 4px;
  height: 50px;
  background: #0177fd;
  position: absolute;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Logo = styled("img")`
  width: 120px;
  display: flex;
  align-items: center;
`;
const Icon = styled("img")`
  width: 28px;
`;
