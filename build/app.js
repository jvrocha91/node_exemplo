"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/listaClientes", (req, res) => {
    //fazer codigo...
    //conectar no mongo, buscar alguma coisa e devolver um JSON resultado.
    res.send("Lista de Restaurantes...");
});
app.listen(port, () => {
    console.log("Servidor HTTP rodando...");
});
