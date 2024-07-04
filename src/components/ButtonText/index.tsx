import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
}

export function ButtonText({ children, ...rest}: ButtonTextProps) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}