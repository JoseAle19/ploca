import express from "express";
import { connection } from "../config/db.js";
import CobrosRouter from "../routes/cobros.routes.js";

export class ServerModel {

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        //rutas de la api
        this.routes();
    }




    routes = () => {
      this.app.use("/api/cobros", CobrosRouter);
    }


    database = async () => {
        await connection;
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`http://localhost:4000/`)
            console.log(`Server running on port ${port}`);
        });
    }
}


