import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer } from "./style";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input = forwardRef(
  ({ id, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainer>
        ⁠
        <input ref={ref} {...rest} />
      </StyledInputContainer>
    );
  }
);
