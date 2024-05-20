import { NotasModel } from "../models/notas.js";
// import { CobrosModel } from "../models/cobros.js;"
const notas = new NotasModel();
// const notas = new NotasModel();

export const getNotas = async (req, res) => {
  try {
    const result = await notas.findAll();


    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}