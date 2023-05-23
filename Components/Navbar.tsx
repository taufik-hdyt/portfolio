import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, name, route, setActive }) => {
  return active !== name ? (
    <Link href={route}>
      <span onClick={() => setActive(name)} className="hover:text-blue-600">
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActive("About");
    if (pathname === "/projects") setActive("Projects");
    if (pathname === "/resume") setActive("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-600 border-b-4 border-blue-600 ">
        {active}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
