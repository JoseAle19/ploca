import { CobrosModel } from "../models/cobros.js";
import { FacturaModel } from "../models/factura.js";
const cobros = new CobrosModel();
const facturas = new FacturaModel();
export const getCobros = async (req, res) => {
  let clientes = [];
  try {

    const result = await cobros.findAll();
    result.forEach(cli => {
      delete cli.res;

    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}