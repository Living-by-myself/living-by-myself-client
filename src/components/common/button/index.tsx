import {
  ButtonColors,
  ButtonFullWidth,
  ButtonSizes,
  ButtonVariants,
} from "@/types/types";
import * as S from "./styles";

interface ButtonProps {
  variants?: ButtonVariants;
  color?: ButtonColors;
  size?: ButtonSizes;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  full?: ButtonFullWidth;
}

const Button = ({
  variants = "contain",
  color = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  type = "submit",
  full = false,
}: ButtonProps) => {
  return (
    <S.Button
      variants={variants}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      $full={full}
    >
      {children}
    </S.Button>
  );
};

export default Button;
