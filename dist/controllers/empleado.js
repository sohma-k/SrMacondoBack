"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userlogin = exports.updateEmpleado = exports.saveEmpleado = exports.deleteEmpleado = exports.getEmpleado = exports.getEmpleados = void 0;
const empleado_1 = __importDefault(require("../models/empleado"));
// Obtener todos los empleados
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listEmpleados = yield empleado_1.default.findAll();
        res.json(listEmpleados);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener los empleados'
        });
    }
});
exports.getEmpleados = getEmpleados;
// Obtener un empleado por ID
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const empleado = yield empleado_1.default.findByPk(id);
        if (empleado) {
            res.json(empleado);
        }
        else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener el empleado'
        });
    }
});
exports.getEmpleado = getEmpleado;
// Eliminar un empleado por ID
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const empleado = yield empleado_1.default.findByPk(id);
        if (empleado) {
            yield empleado.destroy();
            res.json({
                msg: `El empleado con el id: ${id} fue eliminado exitosamente`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un empleado con el id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar el empleado'
        });
    }
});
exports.deleteEmpleado = deleteEmpleado;
// Guardar un nuevo empleado
const saveEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    /*
    // Validamos si el usuario ya existe en la base de datos
    const empleado = await empleado.findOne({ where: { id: id } });
    
    if (empleado) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    } */
    try {
        yield empleado_1.default.create(body);
        res.json({
            msg: 'El empleado fue agregado con éxito',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al agregar empleado'
        });
    }
});
exports.saveEmpleado = saveEmpleado;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        // Encuentra el empleado por id
        const empleado = yield empleado_1.default.findByPk(id);
        if (empleado) {
            // Actualiza el empleado con los datos del cuerpo de la solicitud
            yield empleado.update(body);
            res.json({
                msg: `El empleado con el id: ${id} fue actualizado exitosamente`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar empleado'
        });
    }
});
exports.updateEmpleado = updateEmpleado;
const userlogin = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'Login User',
        body: req.body
    });
};
exports.userlogin = userlogin;
