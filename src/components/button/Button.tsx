import { buttonProps } from "@/types";
import { clsx } from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        actionButton &&
          "text-white hover:bg-blue-800 focus:ring-4 font-medium text-sm rounded-lg px-5 py-2.5  focus:outline-none",
        `${bgColor} hover:${bgColor} font-medium text-sm rounded-lg px-5 py-2.5  focus:outline-none text-white `
      )}
    >
      {text}
    </button>
  );
};

export default Button;
