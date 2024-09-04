import { DataTypes } from 'sequelize';
import db from '../db/conection';

const Empleado = db.define('Empleado', {
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    lastname2: {
        type: DataTypes.STRING
    },
    Emp_Telefono: {
        type: DataTypes.STRING
    },
    Emp_Email: {
        type: DataTypes.STRING
    },
    Contrasena: { 
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Empleado;

