import { ICountry } from './../models/Country';
import { shuffleArray } from './../utils/utils';
import { IGame, IQuestion } from '../models/Game';

const TOTAL_QUESTIONS_PER_GAME = 5;
const CATEGORIES = ['flag', 'capital']

export let activeGames: IGame[] = []

export const createNewGame = (countries: ICountry[], user: string) => {
    shuffleArray(countries)

    const alreadyGame = activeGames.find(game => game.user === user)
    if (alreadyGame) activeGames = activeGames.filter(game => game.user !== alreadyGame.user)

    const questions: IQuestion[] = []

    let i = 0;
    while (i < TOTAL_QUESTIONS_PER_GAME) {
        const questionCountries = countries.splice(0,4);
        const correct = questionCountries[0];
        shuffleArray(questionCountries);

        const question = {
            correct,
            countries: questionCountries,
            type: Math.floor(Math.random() * CATEGORIES.length)
        }
        questions.push(question)
        i++;
    }

    const newGame: IGame = {
        user,
        questions,
        totalCorrect: 0,
        totalWrong: 0,
        round: 0,
        totalQuestions: TOTAL_QUESTIONS_PER_GAME
    }
    activeGames.push(newGame);
    return newGame;
}

export const setSelectedAnswer = (id: string, game: any): IGame | false => {

    const actualGame = activeGames.find(g => g.user === game.user)
    if (!actualGame) return false

    const isCorrect = actualGame.questions[actualGame.round].correct.id === id

    if (isCorrect) actualGame.totalCorrect++
    else actualGame.totalWrong++

    // actualGame.totalQuestions++
    actualGame.round++

    return actualGame
}