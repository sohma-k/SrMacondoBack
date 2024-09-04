"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const Empleado = conection_1.default.define('Empleado', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname2: {
        type: sequelize_1.DataTypes.STRING
    },
    Emp_Telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    Emp_Email: {
        type: sequelize_1.DataTypes.STRING
    },
    Contrasena: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Empleado;
