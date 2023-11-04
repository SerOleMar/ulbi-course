import { ReactNode } from "react";
import {
  Link as ReactLink,
  LinkProps as ReactLinkProps,
} from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Link.module.scss";

type LinkVariant = "primary" | "secondary" | "red";

interface LinkProps extends ReactLinkProps {
  className?: string;
  theme?: LinkVariant;
  children?: ReactNode;
}

export const Link = (props: LinkProps) => {
  const { to, className, theme = "primary", children, ...otherProps } = props;

  return (
    <ReactLink
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </ReactLink>
  );
};
