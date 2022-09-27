import { Router, Request, Response } from 'express';

const countryRouter = Router();

countryRouter.get('/', (_: Request, res: Response) => {
    res.send('Hello!')
});

export default countryRouter;