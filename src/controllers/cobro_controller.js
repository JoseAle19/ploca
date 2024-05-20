import { CobrosModel } from "../models/cobros.js";
import { FacturaModel } from "../models/factura.js";
const cobros = new CobrosModel();
const facturas = new FacturaModel();
export const getCobros = async (req, res) => {
  let clientes = [];
  try {

    const result = await cobros.findAll();
    result.forEach(cli => {
      // "fac_id": "RE-00216",
      // "not_importe": 4475.657999999999,
      // "cob_saldo_actual": 0.0010000000000331966,
      // "nuevo_cobro": 0.000008912655971775371,
      // "resultado_division": 0.000008912655971775371,
      // "nombre cliente": "LOPEZ CANO MARIA DEL CARMEN"
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}