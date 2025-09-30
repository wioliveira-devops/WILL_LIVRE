import React from "react";

// BEM
// Blocks = Componente
// Elements __
// Modifiers --
// Palavras compostas -

const Produto = () => {
  return (
    <div className="produto produto--vertical">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
        alt="Imagem do Produto"
        className="produto__img"
      />

      <p>Liquidificador Turbo Blq970p 900w 2,6 Litros Britânia 110v</p>

      <div className="produto__precos">
        <p className="produto__preco-riscado">R$ 1.149</p>

        <div className="produto__desconto">
          <p className="produto__preco">R$ 849</p>
          <p className="verde">26% OFF</p>
        </div>

        <p>
          em <span className="verde">12x R$ 70,75 sem juros</span>
        </p>
      </div>

      <div className="produto__full verde">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="produto__icone"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>

        <p className="bold">FULL</p>
      </div>
    </div>
  );
};

export default Produto;
