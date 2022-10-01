import { Router } from 'express';
import countryRouter from './country';
import gameRouter from './game';

const router = Router();

router.use('/countries', countryRouter);
router.use('/game', gameRouter);

export default router;
