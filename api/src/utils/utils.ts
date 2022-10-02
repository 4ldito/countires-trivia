import { IGame } from '../models/Game';
import { ICountry } from './../models/Country';

export const shuffleArray = (array: ICountry[]): ICountry[] => {

    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }

    return array;
}

export const factorizedGame = (game: IGame) => {
    return {
        ...game,
        questions: game.questions.map((question) => {
            return {
                body: { flag: question.correct.flag, capital: question.correct.capital },
                countries: question.countries.map(country => {
                    return { id: country.id, name: country.name }
                }),
                type: question.type
            }
        })
    }
}