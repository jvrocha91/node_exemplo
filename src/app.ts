import express from "express";

const app=express();
const port=3000;

app.use(express.json());

app.get("/listaClientes", (req,res)=>{
    //fazer codigo...
    //conectar no mongo, buscar alguma coisa e devolver um JSON resultado.
    res.send("Lista de Restaurantes...");
});

app.listen(port,()=>{
    console.log("Servidor HTTP rodando...");
})