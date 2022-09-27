import { Router } from 'express';
import countryRouter from './country';

const router = Router();

router.use('/countries', countryRouter);

export default router;
