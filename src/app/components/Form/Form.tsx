import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm } from "./style";
import { Input } from "./Input/Input";
import { ICar } from "@/app/page";
import { useState } from "react";
import { toast } from "react-toastify";

type FormValue = {
  search: string;
};

interface IFormProps {
  cars: ICar;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  getCars: Promise<void>;
}

export default function Form({ cars, setCars, getCars }: IFormProps) {
  const [activeBtn, setActiveBtn] = useState(false);

  function resetSearch() {
    setActiveBtn(!activeBtn);

    getCars();
  }

  const { register, handleSubmit, reset } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (item) => {
    const searchItems = cars.filter(
      (car) =>
        car.modelName.toLowerCase().includes(item.search.toLowerCase()) ||
        car.bodyType.toLowerCase().includes(item.search.toLowerCase())
    );

    if (searchItems.length) {
      setCars(searchItems);
      setActiveBtn(!activeBtn);
      toast.success("Busca realizada com sucesso!");
    } else {
      toast.warn("Carro não encontrado");
    }

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
