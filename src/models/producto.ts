import { DataTypes } from 'sequelize'
import db from '../db/conection'

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    },
    idsucursal: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Producto