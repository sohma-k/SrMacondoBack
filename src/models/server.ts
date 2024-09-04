import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesAdmin from '../routes/Admin';  // Asegúrate de que este archivo incluya ambas rutas
import routesempleado from '../routes/empleado' ;
import db from '../db/conection';

class Server {
    private app: Application;
    private port: string;

    constructor () { 
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        });
    }

    midlewares() {
        // Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            });
        });

        // Usa el router que incluye rutas para productos y empleados
        this.app.use('/api/productos', routesAdmin);
        this.app.use('/api/users', routesempleado);
    }



    async dbConect() {
        try {  
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log('Error al conectarse a la base de datos:', error);
        }
    }
}

export default Server;
