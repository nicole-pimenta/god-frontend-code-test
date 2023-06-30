import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm } from "./style";
import { Input } from "./Input/Input";
import { ICar } from "@/app/page";
import { useState } from "react";

type FormValue = {
  search: string;
};

interface IFormProps {
  cars: ICar;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
}

export default function Form({ cars, setCars,getCars: Promise<void>; }: IFormProps) {
  const [activeBtn, setActiveBtn] = useState(false);

  function resetSearch() {


    setActiveBtn(!activeBtn);
  }

  const { register, handleSubmit, reset } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (item) => {
    const itemLowerCase = item.search.toLowerCase();
    const filteredArray = cars.filter((car) => {
      if (car.modelName.includes(itemLowerCase)) {
        return car.modelName;
      }
      if (car.bodyType.includes(itemLowerCase)) {
        return car.bodyType;
      }
      if (car.modelType.includes(itemLowerCase)) {
        return car.modelType;
      }
    });

    setCars(filteredArray);

    setActiveBtn(!activeBtn);

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Digite aqui a sua busca"
        type="text"
        {...register("search")}
      />

      <button type="submit">Buscar</button>

      {activeBtn == true && <button onClick={resetSearch}>Limpar Busca</button>}
    </StyledForm>
  );
}
