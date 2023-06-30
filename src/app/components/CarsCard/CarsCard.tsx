import { ICar } from "../../page";

interface ICarsCardProps {
  car: ICar;
}

export default function CarsCard({ car }: ICarsCardProps) {
  const { bodyType, imageUrl, modelName, modelType } = car;
  return (
    <>
      <div>
        <p>{bodyType.toUpperCase()}</p>
        <h4>
          {modelName} <span> {modelType}</span>
        </h4>
      </div>
      <img src={imageUrl} />
      <div>
        <a>LEARN {">"}</a>
        <a>SHOP {">"}</a>
      </div>
    </>
  );
}
