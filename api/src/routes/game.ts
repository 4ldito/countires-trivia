import { Router, Request, Response } from 'express';
import Country from './../models/Country';

import { createNewGame, setSelectedAnswer } from './../controllers/game';
import { factorizedGame } from '../utils/utils';

/**
 * TODO:
 * Crear un objeto de juegos activos. Cada vez que se crea un nuevo juego, agregar una nueva key con el ID de ese usuario.
 * Si ya existe una key con el ID de ese usuario, significa que ya tiene un juego activo. Preguntar si quiere reanudar ese juego, o
 * crear uno nuevo. Si reanuda el juego, se reestablece a la pregunta que se encontraba.
 * En caso de crear un nuevo juego, se deberan crear las preguntas, por ahora 5, con sus preguntas y respuestas. El juego deberá
 * indicar en la ronda que se encuentra y la cantidad de preguntas correctas e incorrectas que lleva.  
 * 
 */

const gameRouter = Router()

gameRouter.get('/new-game', async (req: Request, res: Response): Promise<Response> => {
    const { user } = req.query;

    if (typeof user !== "string") {
        throw new Error("Query param user must to be of type string");
    }

    try {
        const countries = await Country.find();
        const game = createNewGame(countries, user);

        const actualGame = factorizedGame(game)
        return res.send(actualGame);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})

gameRouter.post('/answer', async (req: Request, res: Response): Promise<Response> => {
    const { id, game } = req.body

    const actualGame = setSelectedAnswer(id, game)

    if (!actualGame) throw new Error('error')

    return res.send(factorizedGame(actualGame));
});

export default gameRouter
