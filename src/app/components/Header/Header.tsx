import { StyledContainer } from "./style";
import Form from "../Form/Form";
import { ICar } from "@/app/page";

interface IHeaderProps {
  cars: ICar;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  getCars(): Promise<void>;
}

export default function Header({ cars, setCars, getCars }: IHeaderProps) {
  return (
    <StyledContainer>
      <h2>
        VolvoCars<span>CodeTest</span>
      </h2>

      <Form cars={cars} setCars={setCars} getCars={getCars} />
    </StyledContainer>
  );
}
