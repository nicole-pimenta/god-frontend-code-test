import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm } from "./style";
import { Input } from "./Input/Input";

type FormValue = {
  search: string;
};

export default function Form() {
  const { register, handleSubmit, reset } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Digite aqui a sua busca"
        type="text"
        id="search"
        {...register("search")}
      />

      <button type="submit">Buscar</button>
    </StyledForm>
  );
}
