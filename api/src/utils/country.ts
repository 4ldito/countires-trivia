import axios from 'axios';
import Country from './../models/Country';

const createCountries = async () => {
    try {
        const country = await Country.findOne();
        if (country) return;
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
    } catch (error) {
        console.log(error)
    }
}

export default createCountries;