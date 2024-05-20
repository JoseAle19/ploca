import { connection } from "../config/db.js";

export class NotasModel {
    constructor() {
    this.conn = connection
     }


findAll = () => {  
    return new Promise((resolve, reject) => {
        connection.query("SELECT  not_importe/not_cantidad AS 'Resultado' FROM notas LIMIT 100", (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });

}

    findById = (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM notas WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}