import { connection } from "../config/db.js";

export class CobrosModel {
    constructor() {
        this.conn = connection
    }

    findAll = ({del, al}) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT 
n.fac_id as nota,
n.not_importe as importe,
c.cob_saldo as abono ,
 c.cob_saldo / (n.not_importe / n.not_cantidad) AS 'KG pagados',
 c.cob_saldo / (n.not_importe / n.not_cantidad) AS res,
cl.cli_nombre as 'nombre cliente'
FROM 
Plosa.notas n
JOIN 
Plosa.cobros c ON n.fac_id = c.fac_id
join plosa.facturas f on n.fac_id = f.fac_id and c.fac_id = f.fac_id
join plosa.clientes cl on f.cli_numero = cl.cli_numero 
WHERE DATE(c.cob_fecha) BETWEEN '${del} 00:00:00' AND '${al} 23:59:59'
HAVING res != 0
LIMIT 100`;
console.log(query)

            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    }

}