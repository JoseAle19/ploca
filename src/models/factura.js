import { connection } from "../config/db.js";

export class FacturaModel{
    constructor(){
        this.conn = connection
    }



    findAll = () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT *
            FROM 
            Plosa.facturas
            `;

            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    }
}