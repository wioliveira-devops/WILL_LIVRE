import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json()); // Middleware para parsear JSON no corpo das requisições
app.use(cors()); // Middleware

app.get("/produto", async (req, res) => {
  const produtos = await prisma.produto.findMany();

  res.json(produtos);
});

app.post("/produto", async (req, res) => {
  // const body = req.body; // Supondo que o corpo da requisição contenha a nova informação
  // const { body } = req; // Desestruturação do objeto req para obter o body
  const {
    titulo,
    preco,
    precoParcelado,
    precoDesconto,
    caracteristicas,
    imagens,
    estoque,
    freteGratis,
    full,
  } = req.body; // Desestruturação do body para obter itens do produto

  const novoProduto = await prisma.produto.create({
    data: {
      titulo,
      preco,
      precoParcelado,
      precoDesconto,
      caracteristicas: JSON.stringify(caracteristicas),
      imagens: JSON.stringify(imagens),
      estoque,
      freteGratis,
      full,
    },
  });

  // console.log(body.nome);
  // console.log(body.imersao);

  // res.json({ nome: body.nome, imersao: body.imersao });
  res.json({ novoProduto }); // Usando a desestruturação para enviar a resposta
});

// app.post("/produto/:id", (req, res) => {
//   // const body = req.body; // Supondo que o corpo da requisição contenha a nova informação
//   const { body } = req; // Desestruturação do objeto req para obter o body
//   const { nome, imersao } = body; // Desestruturação do body para obter nome e imersao

//   const idDaMinhaRequisicao = req.params.id; // Acessando o id da requisição
//   const { id } = req.params; // Desestruturação do objeto req para obter o params

//   console.log("ID da requisição:", idDaMinhaRequisicao, id); //

//   res.json({ nome, imersao }); // Usando a desestruturação para enviar a resposta
// });

app.listen(3000, () =>
  console.log("My server is running on port http://localhost:3000/")
);
