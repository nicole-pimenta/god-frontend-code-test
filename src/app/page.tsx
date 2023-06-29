"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    fetch("./api/cars.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCarsList(res));
  }, []);

  return (
    <main>
      <p>
        {" "}
        {carsList.map((car) => (
          <p key={car.id}> {car.modelName}</p>
        ))}
      </p>
    </main>
  );
}
