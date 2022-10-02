import { model, Schema, Document } from "mongoose";

export interface ICountry {
    id: string,
    name: string,
    capital: string,
    flag: string
}

interface ICountryDocument extends Document{
    id: string,
    name: string,
    capital: string,
    flag: string
}

const countrySchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    capital: {
        type: String,
        required: true,
        trim: true
    },
    flag: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
})

export default model<ICountryDocument>('Country', countrySchema)