import { CobrosModel } from "../models/cobros.js";
import { FacturaModel } from "../models/factura.js";
const cobros = new CobrosModel();
const facturas = new FacturaModel();
export const getCobros = async (req, res) => {
  
  try {
    const result = await cobros.findAll(req.body);

    const groupedData = result.reduce((acc, obj) => {
      const key = `${obj.fac_id}_${obj["nombre cliente"]}`;
      if (!acc[key]) {
          acc[key] = {
              fac_id: obj['nota'],
              nombre: obj["nombre cliente"],
              cobros: []
          };
      }
      acc[key].cobros.push({
          importe: obj['importe'],
          abono: obj['abono'],
          "KG pagados": obj['KG pagados']
      });
      return acc;
  }, {});
  
  // Convertir el objeto agrupado en un arreglo de objetos
  const transformedData = Object.values(groupedData);

    res.json(transformedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}