import { model, Schema, Document } from "mongoose";
import { ICountry } from "./Country";

export interface IQuestion {
    correct: Object
    countries: ICountry[]
}

export interface IGame {
    user: string
    questions: IQuestion[]
    totalCorrect: number
    totalWrong: number
    totalQuestions: number
}


export interface IGameDocument extends Document {
    user: string,
    questions: {},
    totalWrong: number,
    totalCorrect: number,
    totalQuestions: number
}

const gameSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    questions: {
        type: Object,
        required: true,
    },
    totalWrong: {
        type: Number,
        required: true,
    },
    totalCorrect: {
        type: Number,
        required: true,
    },
    totalQuestions: {
        type: Number,
        required: true,
    }
})

export default model<IGameDocument>('Game', gameSchema)