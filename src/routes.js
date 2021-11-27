import { Router } from 'express';
import { create, getOne, index, delProduct, update } from './services/product.service'

const router = Router();

router.get('/products', index);
router.get('/products/:_id', getOne);
router.post('/products', create);
router.put('/products/:_id', update);
router.delete('/products/:_id', delProduct)

export { router };