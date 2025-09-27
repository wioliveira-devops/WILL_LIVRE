import React from "react";
import Produto from "../components/Produto";

const Home = () => {
  return (
    <section className="secao-produto">
      <div className="container">
        <h1>Todos os produtos</h1>

        <div className="produtos">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </div>
    </section>
  );
};

export default Home;
