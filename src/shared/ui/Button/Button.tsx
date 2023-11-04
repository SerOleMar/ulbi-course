import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

type ButtonVariant = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonVariant;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className, theme = "clear", children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
