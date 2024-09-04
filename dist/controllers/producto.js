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
exports.searchProducts = exports.getProductsByCategory = exports.updateProduct = exports.saveProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const sequelize_1 = require("sequelize");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield producto_1.default.findAll();
    res.json(listProducts);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        yield product.destroy();
        res.json({
            msg: `El producto con el id: ${id} fue elimidado exitosamente`
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        });
    }
});
exports.deleteProduct = deleteProduct;
const saveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_1.default.create(body);
        res.json({
            msg: 'El producto fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        console.log('Error al agregar producto');
    }
});
exports.saveProduct = saveProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        yield product.update(body);
        res.json({
            msg: `El producto con el id: ${id} fue actualizado exitosamente`
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
        try {
        }
        catch (error) {
            console.log(error);
            console.log('Error al actualizar producto');
        }
    }
});
exports.updateProduct = updateProduct;
// Obtener productos por categoría
const getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtenemos la categoría desde los parámetros de la consulta
    const categoria = req.query.categoria;
    if (!categoria) {
        return res.status(400).json({
            msg: 'La categoría es requerida'
        });
    }
    try {
        const products = yield producto_1.default.findAll({
            where: {
                categoria: categoria // Utiliza el valor de la categoría para filtrar
            }
        });
        if (products.length > 0) {
            res.json(products);
        }
        else {
            res.status(404).json({
                msg: `No existen productos en la categoría ${categoria}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al buscar productos por categoría'
        });
    }
});
exports.getProductsByCategory = getProductsByCategory;
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.query;
    try {
        const listProducts = yield producto_1.default.findAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${query}%`
                }
            }
        });
        res.json(listProducts);
    }
    catch (error) {
        // Asegura que el error es de tipo 'Error'
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('Unknown error occurred.');
        }
    }
});
exports.searchProducts = searchProducts;
