import { StyledContainer } from "./style";

import { ICar } from "../../page";

interface ICarsCardProps {
  car: ICar;
}

export default function CarsCard({ car }: ICarsCardProps) {
  const { id, modelName, bodyType, modelType, imageUrl } = car;
  return <>teste</>;
}
