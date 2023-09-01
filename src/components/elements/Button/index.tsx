import Link from "next/link";
import React, { FC, ReactNode, useMemo } from "react";

type TButtonProps = {
  onClick?: () => void;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  isLoading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "blue" | "sky" | "dark" | "red";
  fullWidth?: boolean;
  children: ReactNode;
};

const style = {
  default:
    "relative inline-block rounded-lg inline-flex min-w-[80px] justify-center items-center text-white font-medium",
  size: {
    sm: "px-3 h-9",
    md: "w-[140px] h-10",
    lg: "min-w-[160px] px-3 h-10",
  },
  colors: {
    default: "bg-blue-dark hover:bg-blue",
    blue: "bg-blue hover:bg-blue-light",
    sky: "bg-blue-light hover:bg-blue-dark",
    dark: "border border-black-700 bg-black-400 hover:bg-black-700",
    red: "bg-red-700 hover:bg-red-500",
  },
};

const Spinner = () => {
  return (
    <span className="absolute left-1/2 top-[calc(50%_+_1px)] -translate-x-1/2 -translate-y-1/2  h-4 w-4">
      <span className="inline-block w-full h-full animate-spin rounded-full border-2 border-white border-t-transparent"></span>
    </span>
  );
};

export const Button: FC<TButtonProps> = ({
  onClick,
  href,
  target = "_self",
  isLoading,
  disabled,
  size = "md",
  color = "default",
  fullWidth,
  children,
}) => {
  const classes = useMemo(() => {
    return `${style.default} ${style.size[size]} ${style.colors[color]}  ${
      disabled ? "opacity-50 pointer-events-none" : ""
    } ${fullWidth ? "w-full" : ""} ${isLoading ? "pointer-events-none opacity-80" : ""}`;
  }, [size, color, fullWidth, disabled]);

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {isLoading && <Spinner />}
        <span className={`${isLoading ? "opacity-0" : ""}`}>{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick ? onClick : undefined} disabled={disabled} className={classes}>
      {isLoading && <Spinner />}
      <span className={`${isLoading ? "opacity-0" : ""}`}>{children}</span>
    </button>
  );
};
