import { ICar } from "@/app/page";
import CarsCard from "../CarsCard/CarsCard";

interface ICarsListProps {
  cars: ICar[];
}

export default function CarsList({ cars }: ICarsListProps) {
  return (
    <div>
      <div> Barra de pesquisa </div>

      <CarsCard cars={cars} />
    </div>
  );
}
