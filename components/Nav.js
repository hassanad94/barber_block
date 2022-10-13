// import nav data
import { navData } from "../data";
import Link from "next/link";

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="link hover:border-b-2 hover:border-dark transition duration-300"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
