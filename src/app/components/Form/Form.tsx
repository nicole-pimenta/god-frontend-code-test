import { useForm, SubmitHandler } from "react-hook-form";
import { FormContainer } from "./style";
import { Input } from "./Input/Input";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<> = (formValue) => {
    console.log(formValue);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Título "
          placeholder="Digite aqui o título do seu livro"
          type="text"
          id="title"
          {...register("title")}
        />

        <button type="submit"> Buscar</button>
      </form>
    </FormContainer>
  );
}
