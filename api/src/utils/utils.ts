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