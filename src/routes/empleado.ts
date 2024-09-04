import { Router } from 'express';
import { userlogin, getEmpleados, getEmpleado, deleteEmpleado, saveEmpleado, updateEmpleado } from '../controllers/empleado';

const router = Router();

// Rutas para empleados
router.get('/', getEmpleados);
router.get('/:id', getEmpleado);
router.post('/', saveEmpleado);
router.post('/login', userlogin);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

export default router;