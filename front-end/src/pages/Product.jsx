import React from "react";

const Product = () => {
  return (
    <section className="secao-produto">
      <div className="container container--produto">
        <div className="imagens">
          <div className="imagens-pequenas">
            <div className="imagem-pequena imagem-pequena--selecionada">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
                alt="Imagem Pequena do Produto"
              />
            </div>

            <div className="imagem-pequena">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_948133-MLA84834570611_052025-F.webp"
                alt="Imagem Pequena do Produto"
              />
            </div>

            <div className="imagem-pequena">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_849138-MLA84536495898_052025-F.webp"
                alt="Imagem Pequena do Produto"
              />
            </div>
          </div>

          <div className="imagem">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
              alt="Imagem Grande"
            />
          </div>
        </div>

        <div className="informacoes">
          <h1>Liquidificador Turbo Blq970p 900w 2,6 Litros Britânia 110v</h1>

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

          <div className="informacoes__caracteristicas">
            <h2>O que você precisa saber sobre este produto</h2>

            <ul>
              <li>Material da jarra: Acrílico</li>
              <li>Capacidade de 2.6 L.</li>
              <li>A sua potência é de 900 W.</li>
              <li>Possui base antiderrapante.</li>
              <li>Lâmina resistente de aço inoxidável.</li>
              <li>Tampa dosadora incorporada.</li>
              <li>Funciona com 4 velocidades.</li>
              <li>Livre de BPA.</li>
              <li>Inclui filtro.</li>
              <li>Picador de gelo.</li>
              <li>Quantidade de lâminas: 4.</li>
            </ul>
          </div>
        </div>

        <div className="pedido">
          <p className="verde bold">Chegará grátis amanhã</p>

          <div className="pedido__estoque">
            <p>Estoque disponível</p>

            <div className="pedido__full">
              <p className="preto-55">Armazenado e enviado pelo</p>

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
          </div>

          <div className="pedido__quantidade">
            <p>Quantidade:</p>

            <select>
              <option value="1">1 unidade</option>
              <option value="2">2 unidade</option>
              <option value="3">3 unidade</option>
              <option value="4">4 unidade</option>
              <option value="5">5 unidade</option>
            </select>

            <p className="preto-55">(10 disponíveis)</p>
          </div>

          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
