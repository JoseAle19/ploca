import { connection } from "../config/db.js";

export class CobrosModel {
    constructor() {
        this.conn = connection
    }

    findAll = () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT 
 
n.fac_id as nota,
n.not_importe as importe,
c.cob_saldo_actual as pago ,
 c.cob_saldo_actual / (n.not_importe / n.not_cantidad) AS 'KG pagados',
 c.cob_saldo_actual / (n.not_importe / n.not_cantidad) AS res,
cl.cli_nombre as 'nombre cliente'
FROM 
Plosa.notas n
JOIN 
Plosa.cobros c ON n.fac_id = c.fac_id
join plosa.facturas f on n.fac_id = f.fac_id and c.fac_id = f.fac_id
join plosa.clientes cl on f.cli_numero = cl.cli_numero 
HAVING res != 0
LIMIT 10`;

            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    }

}