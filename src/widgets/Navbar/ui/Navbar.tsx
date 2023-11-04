import { Link } from "@/shared/ui/Link";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <Link to={"/"} theme="secondary" className={cls.mainLink}>
          Home
        </Link>
        <Link to={"/about"} theme="red">
          About
        </Link>
      </div>
    </div>
  );
};
