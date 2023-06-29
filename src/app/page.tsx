"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarsList from "./components/CarsList/CarsList";
import { GlobalStyle } from "./styles/global";
import { MainContainer } from "./style";

export interface ICar {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export default function Home() {
  const [cars, setCars] = useState<ICar[]>([]);

  async function getCars() {
    try {
      await fetch("./api/cars.json", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setCars(res));
    } catch (error) {
      throw new Error("Request Failed");
    }
  }

  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <CarsList cars={cars} />
      </MainContainer>
      <Footer />
    </>
  );
}
