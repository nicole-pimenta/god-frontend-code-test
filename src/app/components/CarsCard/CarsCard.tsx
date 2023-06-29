import React from "react";
import { ICar } from "@/app/page";

interface ICarsCardProps {
  cars: ICar[];
}

export default function CarsCard({ cars }: ICarsCardProps) {
  return <div>{cars.map((ele) => ele.id)}</div>;
}
