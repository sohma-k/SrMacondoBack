"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_1 = require("../controllers/empleado");
const router = (0, express_1.Router)();
// Rutas para empleados
router.get('/', empleado_1.getEmpleados);
router.get('/:id', empleado_1.getEmpleado);
router.post('/', empleado_1.saveEmpleado);
router.post('/login', empleado_1.userlogin);
router.put('/:id', empleado_1.updateEmpleado);
router.delete('/:id', empleado_1.deleteEmpleado);
exports.default = router;
