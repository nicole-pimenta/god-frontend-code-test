import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer } from "./style";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

// eslint-disable-next-line react/display-name
export const InputSearch = forwardRef(
  (
    { placeholder, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputContainer>
        ⁠
        <input ref={ref} {...rest} />
      </StyledInputContainer>
    );
  }
);
