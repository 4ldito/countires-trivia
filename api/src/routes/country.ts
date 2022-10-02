import axios from 'axios';
import { Router, Request, Response } from 'express';
import Country from './../models/Country';

const countryRouter = Router()

countryRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {

    try {
        const { data } = await axios('https://restcountries.com/v3.1/all');
        const allCountries = data.map((country: any) => {
            return {
                id: country.cca3,
                name: country.name.common,
                capital: country.capital ? country.capital[0] : 'None',
                flag: country.flags.svg
            }
        })

        await Country.collection.insertMany(allCountries)

        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
})

export default countryRouter
