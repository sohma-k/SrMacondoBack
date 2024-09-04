"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/search', producto_1.searchProducts);
router.get('/', producto_1.getProducts);
router.get('/categoria', producto_1.getProductsByCategory);
router.get('/:id', producto_1.getProduct);
router.post('/', producto_1.saveProduct);
router.put('/:id', producto_1.updateProduct);
router.delete('/:id', producto_1.deleteProduct);
exports.default = router;
