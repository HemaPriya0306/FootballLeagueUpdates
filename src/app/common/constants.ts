import { CountryDetails } from "../model/model";

export const Countries: CountryDetails[] = [
    {
        name: "England",
        leagueName: "Premier League"
    },
    {
        name: "Spain",
        leagueName: "La Liga"
    },
    {
        name: "France",
        leagueName: "Ligue 1"
    },
    {
        name: "Germany",
        leagueName: "Bundesliga"
    },
    {
        name: "Italy",
        leagueName: "Serie A"
    }
]

export const BaseUrl: string = 'https://v3.football.api-sports.io/';

export const ServiceHeaders = {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'ef6bece72f053c77dc7e00b81ced44c5',
}