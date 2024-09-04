import { Router } from 'express';
import {deleteProduct, getProduct, getProducts, saveProduct, updateProduct} from '../controllers/producto';

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
router.post('/', saveProduct)
router.put('/:id', updateProduct)

export default router;