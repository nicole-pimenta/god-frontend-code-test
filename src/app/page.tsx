"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarsList from "./components/CarsList/CarsList";

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
    <>
      <Header />
      <main>
        <CarsList />
      </main>
      <Footer />
    </>
  );
}
