export class CobrosModel {
    constructor() {
        this.conn = connection
    }

    findAll = () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT cob_saldo_actual FROM Plosa.cobros WHERE", (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });

    }
 
}