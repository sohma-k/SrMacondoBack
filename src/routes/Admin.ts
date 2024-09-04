import { Router } from 'express';
import { searchProducts, getProducts, getProduct, deleteProduct, saveProduct, updateProduct, getProductsByCategory } from '../controllers/producto';

const router = Router();

// Rutas para productos
router.get('/search', searchProducts);
router.get('/', getProducts);
router.get('/categoria', getProductsByCategory);
router.get('/:id', getProduct);
router.post('/', saveProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);



export default router;
